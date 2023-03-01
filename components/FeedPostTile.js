import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../utils/Colors';

export default function FeedPostTile({
  name,
  description,
  rating,
  city,
  state,
  pictures,
}) {
  const image = { uri: `${pictures}` };
  return (
    <View>
      <View style={styles.postHeader}>
        <Text style={styles.headerText}>Username</Text>
        <Text>❤️</Text>
      </View>
      <ImageBackground
        source={image}
        style={styles.postBody}
        resizeMode='cover'
      >
        <Text style={styles.bodyText}>{name}</Text>
        <Text style={styles.bodyText}>
          {city},{state}
        </Text>
        <Text style={styles.rating}>{rating}</Text>
      </ImageBackground>
      <View style={styles.postFooter}>
        <Text>Description: {description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: Colors.primary200,
  },
  postBody: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 130,
    height: 250,
    width: '100%',
  },
  postFooter: {
    padding: 10,
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 3,
    margin: 1,
    backgroundColor: 'rgba(221,221,221, 0.5)',
  },
  rating: {
    fontSize: 16,
    padding: 4,
  },
});
