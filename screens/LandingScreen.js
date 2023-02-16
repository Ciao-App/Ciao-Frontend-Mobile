import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../utils/Colors';

export default function LandingScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/images/backgroundTwo.jpeg')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <StatusBar style='light' />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ciao!</Text>
        <Text style={styles.landingText}>
          Welcome to your new favorite app to track & share your amazing
          adventures with friends!
        </Text>
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton onPress={() => navigation.navigate('Sign In')}>
          Sign In
        </PrimaryButton>
        <PrimaryButton onPress={() => navigation.navigate('Sign Up')}>
          New to Ciao? Sign Up!
        </PrimaryButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backgroundImage: {
    opacity: 0.95,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 115,
  },
  title: {
    color: Colors.primary100,
    fontSize: 70,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
  },
  landingText: {
    color: Colors.primary100,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 40,
    fontSize: 15,
  },
  buttonView: {
    marginBottom: 130,
    width: '80%',
    height: 50,
  },
});
