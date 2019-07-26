import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {
  borderRadius,
  margin,
  padding,
  defaultColor,
  fontSize
} from '../constants/config';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: defaultColor,
    borderWidth: 1,
    borderRadius: borderRadius.input,
    margin,
    padding,
    fontSize
  }
});

const Input = (
  props = {
    keyboardType: 'default'
  }
) => {
  return (
    <TextInput
      style={styles.textInput}
      autoCapitalize="none"
      underlineColorAndroid="transparent"
      {...props}
    />
  );
};

export default Input;
