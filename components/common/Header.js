import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "./COLORS";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: "100%",
        height: 70,
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 0.2,
        borderBottomColor: "#8e8e8e",
        backgroundColor: COLORS.dark,
      }}
    >
      <TouchableOpacity
        style={{
          marginLeft: 20,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0.2,
          padding: 7,
          borderRadius: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../images/back.png")}
          style={{ width: 24, height: 24, backgroundColor: "white" }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "600",
          fontSize: 20,
          color: "white",
          marginLeft: 20,
        }}
      >
        Glasses Store
      </Text>
    </View>
  );
};

export default Header;
