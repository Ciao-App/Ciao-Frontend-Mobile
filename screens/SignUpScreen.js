import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Auth/Input';
import SecondaryButton from '../components/ui/SecondaryButton';
import Colors from '../utils/Colors';

export default function SignUpScreen() {
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
        <Input label='First Name' />
        <Input label='Last Name' />
        <Input label='Password' />
        <View>
          <SecondaryButton>Submit</SecondaryButton>
        </View>
        <Text style={styles.switchText}>Already have an account?</Text>
        <View>
          <SecondaryButton onPress={() => navigation.navigate('Sign In')}>
            Login
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
