import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Main from "./bottom/Main";
import Search from "./bottom//Search";
import Cart from "./bottom/Cart";
import Wishlist from "./bottom//Wishlist";
import Profile from "./bottom/Profile";

const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [bg, setbg] = useState("");

  const colorPicker = () => {
    if (selectedTab === 0) {
      setbg(COLORS.dark);
    } else if (selectedTab === 2) {
      setbg(COLORS.dark);
    }
  };
  return (
    
    //view1
    <View style={{ flex: 1,  }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}

      {/* view2 */}
      <View
        style={{
          width: "100%",
          height: 70,
          position: "absolute",
          bottom: 0,
          backgroundColor:COLORS.dark,
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
            backgroundColor: selectedTab == 0 ? `#008080` : COLORS.dark,
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Ionicons name="home-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: selectedTab == 1 ? `#008080` : COLORS.dark,
          }}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Ionicons name="search-outline" size={32} color="white" />
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
              backgroundColor: selectedTab == 2 ? COLORS.light : `#696969`,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelectedTab(2);
            }}
          >
            <Ionicons name="cart-outline" size={37} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: selectedTab == 3 ? `#008080` : COLORS.dark,
          }}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Ionicons name="heart-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: selectedTab == 4 ? `#008080` : COLORS.dark,
          }}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Ionicons name="person-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container:{
    backgroundColor:COLORS.dark,
  }
});
