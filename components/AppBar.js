import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {

  return (
    <Appbar.Header style={{marginTop:20, backgroundColor:'lightgray',}}>
      
      <Appbar.Content  title="NEWS"  />
      
    </Appbar.Header>
  );
};

export default Header;