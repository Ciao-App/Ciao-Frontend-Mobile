import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import FeedPostTile from '../components/FeedPostTile';

export default function FeedScreen() {
  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <FeedPostTile />
        <FeedPostTile />
        <FeedPostTile />
        <FeedPostTile />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
