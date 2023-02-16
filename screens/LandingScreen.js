import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../utils/Colors';

export default function LandingScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundOne.jpeg')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <Text style={styles.text}>Ciao!</Text>
      <View style={styles.buttonView}>
        <PrimaryButton>Sign In</PrimaryButton>
        <PrimaryButton>Sign Up</PrimaryButton>
      </View>
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
    opacity: 0.95,
  },
  text: {
    color: Colors.primary100,
    fontSize: 60,
    textAlign: 'center',
    margin: 10,
  },
  buttonView: {
    flexDirection: 'row',
  },
});
