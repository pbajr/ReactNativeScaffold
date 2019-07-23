import React from 'react';
import { View, Text } from 'react-native';
import { Button, Container, Content } from 'native-base';

const HomeScreen = props => {
  return (
    <Container>
      <Content>
        <View>
          <Text>Home</Text>
          <Button primary onPress={() => props.navigation.navigate('Settings')}>
            <Text style={{ color: '#fff' }}>Go to settings</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default HomeScreen;
