import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Button,
  Item,
  Form,
  Label,
  Input,
  Content,
  Container
} from 'native-base';

const styles = StyleSheet.create({
  loginButtonLabel: {
    color: '#fff'
  }
});

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = () => {
    alert(email + ' ' + password);
  };

  return (
    <Container>
      <Content>
        <View>
          <Form>
            <Item inlineLabel>
              <Label>Email</Label>
              <Input value={email} onChangeText={value => setEmail(value)} />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input
                value={password}
                onChangeText={value => setPassword(value)}
              />
            </Item>
          </Form>

          <Button block onPress={() => authenticate()}>
            <Text style={styles.loginButtonLabel}>Login</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default LoginScreen;
