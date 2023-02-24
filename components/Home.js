import * as React from 'react';
import Main from './homecomponents/Main';
import AR from './homecomponents/AR';
import Profile from './homecomponents/Profile';
import Store from './homecomponents/Store';
import Cart from './homecomponents/Cart';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native';
import Stackk from './Stackk';


const Tab = createBottomTabNavigator();

const Home = () =>{
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Store') {
            iconName = focused ? 'glasses' : 'glasses-outline';
          }
          else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveBackgroundColor:'bisque',
      })}
    >


            <Tab.Screen name="Main" component={Main} />
            <Tab.Screen name="Store" component={Store} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
          </Tab.Navigator>
       
      );
}

export default Home;