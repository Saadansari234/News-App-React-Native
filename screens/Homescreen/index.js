import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';
import axios from 'axios';
import { Card, Title, Paragraph } from 'react-native-paper';
import Header from '../../components/AppBar';

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=us&apiKey=e0ac332f22c243829c4cf957f0861860"
                );
                console.log(response.data)
                const data = response.data.articles.map(article => ({
                    date: `${article.publishedAt}`,
                    title: `${article.title}`,
                    url: `${article.url}`,
                    description: `${article.description}`,
                    urlToImage: `${article.urlToImage}`,
                }));
                setArticles(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        getArticles();
    }, []);

    return (
        <View>
            <Header />
            <ScrollView>
                {!isLoading ? (
                    articles.map(article => {
                        const { date, title, url, description, urlToImage } = article;
                        return (
                            <Card
                                key={url}
                                style={{ marginTop: 10, borderColor: 'black', borderRadius: 5, borderBottomWidth: 1 }}
                                onPress={() => { Linking.openURL(`${url}`) }}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    {/*  Text */}
                                    <View style={{ justifyContent: 'space-around', flex: 2 / 3, margin: 10 }}>
                                        <Title>{title}</Title>
                                    </View>
                                    {/*  Image */}
                                    <View style={{ flex: 1 / 3, margin: 10 }}>
                                        <Image style={{ width: 120, height: 120 }} source={{ uri: urlToImage }} />
                                    </View>
                                </View>
                                <View style={{ margin: 10 }}>
                                    <Paragraph>{description}</Paragraph>
                                    <Text>Published At: {date}</Text>
                                </View>
                            </Card>
                        );
                    })
                ) : (
                    <Text style={{ justifyContent: 'center', alignItems: 'center' }}>Loading...</Text>
                )}
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
