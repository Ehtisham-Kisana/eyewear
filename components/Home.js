import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const Home = () => {
  return (
    //view1
    <View style={{ flex: 1 }}>
      {/* view2 */}
      <View
        style={{
          width: "100%",
          height: 70,
          position: "absolute",
          bottom: 0,
          backgroundColor: COLORS.secondary,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Ionicons name='home' size='23'  /> */}
          <Ionicons name="home-outline" size={32} color={COLORS.light} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="search-outline" size={32} color={COLORS.light} />
        </TouchableOpacity>

        {/* View3 */}
        <View
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{width:60,height:60, backgroundColor:COLORS.dark, borderRadius:30,justifyContent:'center',alignItems:'center'}}>
          <Ionicons name="cart-outline" size={37} color={COLORS.light} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="heart-outline" size={32} color={COLORS.light} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="person-outline" size={32} color={COLORS.light} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

// import * as React from 'react';
// import Main from './homecomponents/Main';
// import AR from './homecomponents/AR';
// import Profile from './homecomponents/Profile';
// import Store from './homecomponents/Store';
// import Cart from './homecomponents/Cart';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Ionicons from 'react-native-vector-icons/Ionicons';

// import { View, Text } from 'react-native';
// import Stackk from './Stackk';

// const Tab = createBottomTabNavigator();

// const Home = () =>{
//     return (
//       <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === 'Main') {
//             iconName = focused
//               ? 'home'
//               : 'home-outline';
//           } else if (route.name === 'Store') {
//             iconName = focused ? 'glasses' : 'glasses-outline';
//           }
//           else if (route.name === 'Cart') {
//             iconName = focused ? 'cart' : 'cart-outline';
//           }
//           else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },

//         tabBarActiveBackgroundColor:'bisque',
//       })}
//     >

//             <Tab.Screen name="Main" component={Main} />
//             <Tab.Screen name="Store" component={Store} />
//             <Tab.Screen name="Cart" component={Cart} />
//             <Tab.Screen name="Profile" component={Profile} />
//           </Tab.Navigator>

//       );
// }

// export default Home;
