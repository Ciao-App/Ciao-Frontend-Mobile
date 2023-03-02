import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ProfilePostTile({ city, pictures }) {
  const image = { uri: `${pictures}` };
  return (
    <View style={styles.postContainer}>
      <ImageBackground
        source={image}
        resizeMode='cover'
        style={styles.postTile}
      >
        <Text style={styles.postText}>{city}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    height: 150,
    width: '33.333%',
    borderWidth: 0.8,
    borderColor: Colors.primary400,
  },
  postTile: {
    width: '100%',
    height: '100%',
  },
  postText: {
    color: 'white',
  },
});
