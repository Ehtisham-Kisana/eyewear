import {View, Text} from 'react-native';
import React from 'react';
import { COLORS } from "../common/COLORS";

const Search = () => {
  return (
    
    <View
    style={{
      flex: 1,
      marginTop: 25,
      backgroundColor: COLORS.secondary,
      marginBottom: 70,
  
    }}
  >
    <View
      style={{
        width: "100%",
        height: 70,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.dark,
        marginBottom: 5,
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 15 }}>
        Cart
      </Text>
    </View>

    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Text>Search</Text>
    </View>
    </View>
  );
};

export default Search;
