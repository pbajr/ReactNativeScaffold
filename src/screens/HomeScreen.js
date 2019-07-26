import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = props => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="settings"
        onPress={() => props.navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
