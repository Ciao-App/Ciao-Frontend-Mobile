import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import PostInput from '../components/ui/PostInput';
import Colors from '../utils/Colors';

export default function CreateScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Recommendation!</Text>
      </View>
      <View>
        <View style={styles.formContainer}>
          <PostInput placeholder='Name' style={styles.input} />
          <PostInput placeholder='Name' style={styles.input} />
        </View>
      </View>
    </View>
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
    backgroundColor: Colors.primary300,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
    padding: 2,
  },
  input: {
    backgroundColor: Colors.primary200,
    borderRadius: 50,
    height: 40,
    padding: 10,
    width: '50%',
  },
});
