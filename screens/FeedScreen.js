import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import FeedPostTile from '../components/FeedPostTile';
import { posts } from '../utils/DummyData';
import IconButton from '../components/ui/IconButton';
import { useNavigation } from '@react-navigation/native';

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
    <>
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CIAO!</Text>
        </View>
        <FlatList
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={renderPost}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
});
