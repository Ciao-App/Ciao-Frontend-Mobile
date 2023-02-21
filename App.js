import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import LandingScreen from './screens/LandingScreen';
import LoginInScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

//* once auth is set up, need to implement conditional statements where it checks if user has a saved profile on the phone
//* if so, then app should render out the home screen as default

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Landing Screen'
              component={LandingScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Sign Up'
              component={SignUpScreen}
              options={{
                title: '',
                headerTransparent: true,
                headerShadowVisible: false,
                headerBackTitleVisible: false,
              }}
            />
            <Stack.Screen
              name='Sign In'
              component={LoginInScreen}
              options={{
                title: '',
                headerTransparent: true,
                headerShadowVisible: false,
                headerBackTitleVisible: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
