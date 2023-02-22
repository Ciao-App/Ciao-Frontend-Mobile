import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';

import LandingScreen from './screens/LandingScreen';
import LoginInScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

//* if user is authenticated then authenticated stack should be used, otherwise use auth stack
function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerTransparent: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name='Landing Screen'
        component={LandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='Sign Up' component={SignUpScreen} />
      <Stack.Screen name='Sign In' component={LoginInScreen} />
      <Stack.Screen name='Home Screen' component={HomeScreen} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home Screen' component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <AuthStack />
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
