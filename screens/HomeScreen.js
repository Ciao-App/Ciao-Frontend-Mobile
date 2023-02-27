import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import IconButton from '../components/ui/IconButton';
import {
  FeedScreen,
  FavoritesScreen,
  ExploreScreen,
  NotificationScreen,
  ProfileScreen,
} from './index';
import Colors from '../utils/Colors';

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name='Feed'
          component={FeedScreen}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            tabBarIcon: () => (
              <IconButton
                icon='home'
                size={26}
                color={Colors.primary600}
                onPress={() => navigation.navigate('Feed')}
              />
            ),
            tabBarShowLabel: false,
          })}
        />
        <Tab.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            tabBarIcon: () => (
              <IconButton
                icon='heart'
                size={26}
                color={Colors.primary600}
                onPress={() => navigation.navigate('Favorites')}
              />
            ),
            tabBarShowLabel: false,
          })}
        />
        <Tab.Screen
          name='Explore'
          component={ExploreScreen}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            tabBarIcon: () => (
              <IconButton
                icon='search-outline'
                size={26}
                color={Colors.primary600}
                onPress={() => navigation.navigate('Explore')}
              />
            ),
            tabBarShowLabel: false,
          })}
        />
        <Tab.Screen
          name='Notifications'
          component={NotificationScreen}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            tabBarIcon: () => (
              <IconButton
                icon='notifications-outline'
                size={26}
                color={Colors.primary600}
                onPress={() => navigation.navigate('Notifications')}
              />
            ),
            tabBarShowLabel: false,
          })}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={({ navigation }) => ({
            title: '',
            headerTransparent: true,
            tabBarIcon: () => (
              <IconButton
                icon='person-outline'
                size={26}
                color={Colors.primary600}
                onPress={() => navigation.navigate('Profile')}
              />
            ),
            tabBarShowLabel: false,
          })}
        />
      </Tab.Navigator>
    </>
  );
}
