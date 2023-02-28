import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';

export default function FeedPostTile() {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Text style={styles.headerText}>Username</Text>
        <Text>⭐</Text>
      </View>
      <View style={styles.postBody}>
        <Text style={styles.bodyText}>Name</Text>
        <Text style={styles.bodyText}>Location</Text>
        <Text style={styles.bodyText}>Rating</Text>
      </View>
      <View style={styles.postFooter}>
        <Text>
          Description: This is where the description of the post will go where
          the user can describe their recommendation, what they liked about the
          place, what they disliked as well as any sort of tips and tricks to
          know about that you wouldn't normally find online
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
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
    backgroundColor: 'slategrey',
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
    paddingHorizontal: 10,
    paddingVertical: 3,
    margin: 1,
    backgroundColor: 'rgba(221,221,221, 0.5)',
  },
});
