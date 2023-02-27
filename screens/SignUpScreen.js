import { useNavigation } from '@react-navigation/native';
import { Alert, ImageBackground } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Auth/Input';
import SecondaryButton from '../components/ui/SecondaryButton';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearUserInputFields,
  onBodyChangeEmail,
  onBodyChangeFirstName,
  onBodyChangeLastName,
  onBodyChangePassword,
} from '../redux/userSlice';
import {
  getUser,
  signInUser,
  signUpUser,
} from '../components/Auth/Services/client';
import { setAuthenticatedUser } from '../redux/authSlice';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const { email, firstName, lastName, password } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  async function submitHandler() {
    const validEmail = email.includes('@');
    const validPassword = password.length >= 6;

    if (!validEmail) {
      Alert.alert('Invalid email. Please input a valid email address');
    } else if (!validPassword) {
      Alert.alert(
        'Passwords must be at least 6 characters long. Please enter a valid password'
      );
    } else {
      const newUser = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
      };
      await signUpUser(newUser);
      const token = await signInUser({
        email: newUser.email,
        password: newUser.password,
      });
      dispatch(
        setAuthenticatedUser({
          user: await getUser(),
          token: token,
          authenticated: true,
        })
      );
      dispatch(clearUserInputFields(''));

      return;
    }
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
