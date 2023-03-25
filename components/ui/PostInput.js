import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function PostInput({
  keyboardType,
  value,
  onChangeText,
  placeholder,
  style,
}) {
  return (
    <TextInput
      style={style}
      autoCapitalize={false}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
    />
  );
}
