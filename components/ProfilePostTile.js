import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function ProfilePostTile({ city, pictures }) {
  const image = { uri: `${pictures}` };
  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={styles.postTile}
      >
        <Text>{city}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  postTile: {
    width: 150,
    height: 150,
    margin: 3,
  },
});
