import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = props => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Go to home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default SettingsScreen;
