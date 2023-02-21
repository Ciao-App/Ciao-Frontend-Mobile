import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../utils/Colors';
import Input from '../components/Auth/Input';
import SecondaryButton from '../components/ui/SecondaryButton';
import { useNavigation } from '@react-navigation/native';

export default function LoginInScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/images/backgroundTwo.jpeg')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.formContainer}>
        <Input label='Email Address' />
        <Input label='Password' />
        <View>
          <SecondaryButton>Log In!</SecondaryButton>
        </View>
        <Text style={styles.switchText}>New to Ciao?</Text>
        <View>
          <SecondaryButton onPress={() => navigation.navigate('Sign Up')}>
            Sign up!
          </SecondaryButton>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    borderRadius: 15,
    backgroundColor: 'rgba(221,221,221, 0.5)',
    padding: 30,
    width: '90%',
  },
  switchText: {
    textAlign: 'center',
    marginVertical: 15,
  },
});
