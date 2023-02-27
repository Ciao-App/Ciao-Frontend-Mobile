import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  FeedScreen,
  FavoritesScreen,
  ExploreScreen,
  NotificationScreen,
  ProfileScreen,
} from './index';

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name='Feed'
          component={FeedScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={FavoritesScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name='Explore'
          component={ExploreScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name='Notifications'
          component={NotificationScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Tab.Navigator>
    </>
  );
}
