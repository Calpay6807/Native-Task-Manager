import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function StatusButton({
  onPress,
  style,
  iconName,
  color,
  size = 20,
}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={() => onPress()}>
      <Icon name={iconName} color={color} size={size} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
  },
});
