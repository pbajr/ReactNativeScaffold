import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {
  fontSize,
  borderRadius,
  margin,
  padding,
  defaultColor
} from '../constants/config';

const styles = StyleSheet.create({
  touchableOpacity: {
    margin,
    padding,
    backgroundColor: defaultColor,
    borderRadius: borderRadius.button,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  disabled: {
    opacity: 0.5
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize,
    marginRight: 10,
    textTransform: 'uppercase'
  }
});

const Button = (
  props = {
    title: '',
    disabled: false,
    isLoading: false
  }
) => {
  const isDisabled = () => {
    return props.disabled || props.isLoading;
  };

  const getDisabledStyle = () => {
    return isDisabled() ? styles.disabled : {};
  };

  const renderLoading = () => {
    return props.isLoading ? (
      <ActivityIndicator size="small" color="#fff" />
    ) : null;
  };

  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, getDisabledStyle()]}
      onPress={props.onPress}
      disabled={isDisabled()}
    >
      <Text style={styles.text}>{props.title}</Text>
      {renderLoading()}
    </TouchableOpacity>
  );
};

export default Button;
