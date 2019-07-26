import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { margin } from '../constants/config';

const styles = StyleSheet.create({
  text: { fontSize: 35, fontWeight: 'bold', margin }
});

const HeaderText = (
  props = {
    size: 1
  }
) => {
  return <Text style={[styles.text]}>{props.title}</Text>;
};

export default HeaderText;
