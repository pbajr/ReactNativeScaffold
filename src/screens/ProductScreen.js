import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductScreen = props => {
  return (
    <View>
      <Text>Product</Text>
      <Button title="Home" onPress={() => props.navigation.navigate('Home')} />
    </View>
  );
};

export default ProductScreen;
