import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
import { getCurrentUserPosts } from '../components/Auth/Services/client';
import ProfilePostTile from '../components/ProfilePostTile';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../utils/Colors';
import { stockBackgroundImage, stockProfilePicture } from '../utils/Defaults';
import { setUserPosts } from '../redux/postSlice';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const { email, firstName, lastName, id } = useSelector(
    (state) => state.auth.user
  );
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    async function getUserPosts() {
      try {
        dispatch(setUserPosts(await getCurrentUserPosts(id)));
      } catch (e) {
        console.log(e);
      }
    }
    getUserPosts();
  }, []);
  console.log('redux posts:', posts);

  function renderPost(itemData) {
    const item = itemData.item;
    const postProps = {
      city: item.city,
      pictures: item.pictures,
    };
    return <ProfilePostTile {...postProps} />;
  }

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
      <View style={styles.postsContainer}>
        <FlatList
          data={posts}
          keyExtractor={(post) => post.id}
          renderItem={renderPost}
          numColumns={3}
        />
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
    paddingVertical: 30,
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
  postsContainer: {
    flex: 1,
    maxWidth: '100%',
    height: '100%',
  },
});
