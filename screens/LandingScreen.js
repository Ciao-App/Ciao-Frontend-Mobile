import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Colors from '../utils/Colors';

export default function LandingScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundOne.jpeg')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <Text style={styles.text}>Landing Screen </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.99,
  },
  text: {
    color: Colors.primary100,
    fontSize: 30,
  },
});
