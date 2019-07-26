import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import HeaderText from '../components/HeaderText';
import { margin } from '../constants/config';

const styles = StyleSheet.create({
  loginButtonLabel: {
    color: '#fff'
  }
});

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const authenticate = () => {
    setLoading(true);

    setTimeout(() => {
      props.navigation.navigate('Home');
    }, 1000);
  };

  return (
    <View>
      <HeaderText title="Login" size={2} />
      <Input
        value={email}
        onChangeText={value => setEmail(value)}
        placeholder="Email"
      />
      <Input
        value={password}
        onChangeText={value => setPassword(value)}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
      />
      <Button
        title="Login"
        onPress={() => authenticate()}
        isLoading={isLoading}
      />
    </View>
  );
};

export default LoginScreen;
