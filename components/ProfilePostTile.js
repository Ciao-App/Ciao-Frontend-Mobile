import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default function ProfilePostTile({ city, pictures }) {
  const image = { uri: `${pictures}` };
  return (
    <View>
      <ImageBackground source={image}>
        <Text>{city}</Text>
      </ImageBackground>
    </View>
  );
}
