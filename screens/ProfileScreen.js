import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
import Colors from '../utils/Colors';
import { stockBackgroundImage, stockProfilePicture } from '../utils/Defaults';

export default function ProfileScreen() {
  const { email, firstName, lastName } = useSelector(
    (state) => state.auth.user
  );

  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        style={styles.profileHeader}
        source={{ uri: stockBackgroundImage }}
      >
        <View style={styles.profilePictureContainer}>
          <ImageBackground
            style={styles.profilePicture}
            source={{ uri: stockProfilePicture }}
            resizeMode='cover'
          ></ImageBackground>
        </View>
      </ImageBackground>
      <View style={styles.accountInfo}>
        <View>
          <Text style={styles.accountText}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.accountText}>{email}</Text>
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
    marginTop: '28%',
    borderRadius: 150 / 2,
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
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
