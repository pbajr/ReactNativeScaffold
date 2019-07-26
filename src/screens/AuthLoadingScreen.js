import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height
  }
});

const AuthLoadingScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 1000);
  });

  return (
    <View style={styles.view}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default AuthLoadingScreen;
