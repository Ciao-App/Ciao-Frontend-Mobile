import { useNavigation } from '@react-navigation/native';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Auth/Input';
import SecondaryButton from '../components/ui/SecondaryButton';
import { useSelector, useDispatch } from 'react-redux';
import {
  onBodyChangeEmail,
  onBodyChangeFirstName,
  onBodyChangeLastName,
  onBodyChangePassword,
} from '../redux/userSlice';
import { signUpUser } from '../components/Auth/Services/client';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const { email, firstName, lastName, password } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  async function submitHandler() {
    const newUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    await signUpUser(newUser);
    dispatch(onBodyChangeEmail(''));
    dispatch(onBodyChangeFirstName(''));
    dispatch(onBodyChangeLastName(''));
    dispatch(onBodyChangePassword(''));
    navigation.replace('Home Screen');
    return;
  }

  return (
    <ImageBackground
      source={require('../assets/images/backgroundTwo.jpeg')}
      resizeMode='cover'
      style={styles.rootScreen}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.formContainer}>
        <Input
          label='Email Address'
          onChangeText={(text) => dispatch(onBodyChangeEmail(text))}
          value={email}
        />
        <Input
          label='First Name'
          onChangeText={(text) => dispatch(onBodyChangeFirstName(text))}
          value={firstName}
        />
        <Input
          label='Last Name'
          onChangeText={(text) => dispatch(onBodyChangeLastName(text))}
          value={lastName}
        />
        <Input
          label='Password'
          onChangeText={(text) => dispatch(onBodyChangePassword(text))}
          value={password}
          secure
        />
        <View>
          <SecondaryButton onPress={submitHandler}>Submit</SecondaryButton>
        </View>
        <Text style={styles.switchText}>Already have an account?</Text>
        <View>
          <SecondaryButton onPress={() => navigation.replace('Sign In')}>
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
