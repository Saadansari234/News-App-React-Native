import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/Homescreen'

export default function App() {
  return (
   <SafeAreaProvider>
    <View style={styles.container}>
      <HomeScreen/>
    </View>
   </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});