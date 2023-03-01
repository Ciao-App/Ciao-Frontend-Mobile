import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../utils/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.profilePictureContainer}>
          <View style={styles.profilePicture}>
            <Text>Picture</Text>
          </View>
        </View>
      </View>
      <View style={styles.accountInfo}>
        <View>
          <Text style={styles.accountText}>Full Name</Text>
          <Text style={styles.accountText}>@handle</Text>
        </View>
        <View>
          <Text style={styles.accountText}>Friends List</Text>
        </View>
      </View>
      <View style={styles.contentHeaderContainer}>
        <Text style={styles.contentHeader}>Recommendations!</Text>
      </View>
      <View style={styles.accountContent}>
        {/* Change to a flatlist with reuseable post component */}
        <ScrollView style={styles.postContainer}>
          <Text>Post</Text>
          <Text>Post</Text>
          <Text>Post</Text>
          <Text>Post</Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  profileHeader: {
    width: '100%',
    height: 175,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: Colors.primary300,
  },
  profilePictureContainer: {
    paddingTop: 125,
  },
  profilePicture: {
    borderRadius: 100,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    backgroundColor: 'pink',
  },
  accountInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
    paddingVertical: 20,
  },
  accountText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 4,
  },
  contentHeaderContainer: {
    padding: 5,
    borderBottomWidth: '100%',
    borderBottomColor: Colors.primary400,
    borderBottomWidth: 1,
  },
  contentHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  postContainer: {
    height: '100%',
  },
});
