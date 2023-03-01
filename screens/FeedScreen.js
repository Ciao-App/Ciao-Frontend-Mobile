import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import FeedPostTile from '../components/FeedPostTile';
import { posts } from '../utils/DummyData';

export default function FeedScreen() {
  function renderPost(itemData) {
    const item = itemData.item;
    const postProps = {
      id: item.id,
      name: item.name,
      description: item.description,
      rating: item.rating,
      city: item.city,
      state: item.state,
      pictures: item.pictures,
    };
    return <FeedPostTile {...postProps} />;
  }
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={renderPost}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
