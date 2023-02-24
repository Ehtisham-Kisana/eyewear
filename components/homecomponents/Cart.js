import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cart=()=>{
    return(
        <View style={styles.container}>
            <Text>This is cart page</Text>
        </View>
    );
}

export default Cart;

const styles = StyleSheet.create({
 
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        },

});