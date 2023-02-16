import { Text, View, StyleSheet } from 'react-native';
import Colors from '../utils/Colors';
import Input from '../components/Auth/Input';
import SecondaryButton from '../components/ui/SecondaryButton';

export default function LoginInScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.formContainer}>
        <Input label='Email Address' />
        <Input label='Password' />
        <View>
          <SecondaryButton>Log In!</SecondaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primary400,
  },
  formContainer: {
    marginTop: 100,
    borderRadius: 15,
    backgroundColor: 'rgba(221,221,221, 0.4)',
    padding: 30,
    width: '90%',
  },
});
