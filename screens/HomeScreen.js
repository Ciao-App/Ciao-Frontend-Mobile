import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getUser } from '../components/Auth/Services/client';

export default function HomeScreen() {
  async function checkIfUserLoggedIn() {
    const user = await getUser();
    console.log('user', user);
    return user;
  }
  checkIfUserLoggedIn();

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
