import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const { user } = useSelector((state) => state.auth);
  console.log('homepage - current user', user);

  return (
    <View style={styles.rootContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
