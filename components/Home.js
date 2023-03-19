import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Main from "./Glasses/Main";
import Search from "./Glasses/Search";
import Cart from "./Glasses/Cart";
import Wishlist from "./Glasses/Wishlist";
import User from "./Glasses/User";

const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [bg, setbg] = useState('');

  const colorPicker=()=>{
    if(selectedTab===0){
      setbg(COLORS.dark)
    }
    else if(selectedTab===2){
      setbg(COLORS.dark)
    }
  }
  return (
    //view1
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}

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
            backgroundColor:selectedTab==0? `#008080`: COLORS.secondary
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          {/* <Ionicons name='home' size='23'  /> */}
          <Ionicons name="home-outline" size={32} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:selectedTab==1? `#008080`: COLORS.secondary
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Ionicons name="search-outline" size={32} color='white' />
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
          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              backgroundColor: selectedTab==2? `#696969`: COLORS.dark,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Ionicons name="cart-outline" size={37} color='white'/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:selectedTab==3? `#008080`: COLORS.secondary
          }}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Ionicons name="heart-outline" size={32} color='white' />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:selectedTab==4? `#008080`: COLORS.secondary
          }}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Ionicons name="person-outline" size={32} color='white' />
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
