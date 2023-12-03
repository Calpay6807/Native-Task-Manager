import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../themes/Colors';

export default function CustomButton({onPress, style, textStyle, label}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onPress()}>
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 10,
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    color: colors.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
});
