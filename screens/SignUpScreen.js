import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Auth/Input';
import SecondaryButton from '../components/ui/SecondaryButton';
import Colors from '../utils/Colors';

export default function SignUpScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.formContainer}>
        <Input label='Email Address' />
        <Input label='First Name' />
        <Input label='Last Name' />
        <Input label='Password' />
        <View>
          <SecondaryButton>Submit</SecondaryButton>
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
