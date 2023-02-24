import { Text, View, StyleSheet, ImageBackground, Alert } from 'react-native';
import Input from '../components/Auth/Input';
import SecondaryButton from '../components/ui/SecondaryButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearUserInputFields,
  onBodyChangeEmail,
  onBodyChangePassword,
} from '../redux/userSlice';
import { getUser, signInUser } from '../components/Auth/Services/client';
import {
  authenticateUser,
  setAuthenticatedUser,
  setUserAuthenticationToken,
} from '../redux/authSlice';

export default function LoginInScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.user);

  async function submitHandler() {
    const User = {
      email: email,
      password: password,
    };
    try {
      const token = await signInUser(User);
      dispatch(setAuthenticatedUser(await getUser()));
      dispatch(setUserAuthenticationToken(token));
      dispatch(authenticateUser(true));
      dispatch(clearUserInputFields(''));
      return;
    } catch (error) {
      dispatch(clearUserInputFields(''));
      Alert.alert(error.message);
    }
    //* need validation to make sure the user exists in the database before rerouting
    //* if no token and user tries to log in, throw alert
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
          label='Password'
          onChangeText={(text) => dispatch(onBodyChangePassword(text))}
          value={password}
          secure
        />
        <View>
          <SecondaryButton onPress={submitHandler}>Log In!</SecondaryButton>
        </View>
        <Text style={styles.switchText}>New to Ciao?</Text>
        <View>
          <SecondaryButton onPress={() => navigation.replace('Sign Up')}>
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
