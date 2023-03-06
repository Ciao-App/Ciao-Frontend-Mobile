import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import GooglePlacesInput from '../components/Auth/Services/google-places';
import Colors from '../utils/Colors';

export default function CreateScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Recommendation!</Text>
      </View>
      <TextInput placeholder='Search Places' style={styles.creationSearch} />
      {/* <TextInput placeholder='Current Location' style={styles.creationSearch} /> */}
      <GooglePlacesInput />
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
  creationSearch: {
    height: 40,
    backgroundColor: Colors.primary200,
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 5,
    marginVertical: 3,
  },
});
