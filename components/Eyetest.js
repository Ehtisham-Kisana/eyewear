import React from "react";
import { View, Text, Button,StyleSheet } from "react-native";

const Eyetest=({navigation})=>{
    return(
        <View style={styles.container}>
          <Text>This is Eyetest page</Text>
          <Button title="Go to Doctors page" onPress={()=>{navigation.navigate('Doctors')}} />
          <Button title="Go to Home page" onPress={()=>{navigation.navigate('Home')}} />
        </View>
    );
}

export default Eyetest;

const styles = StyleSheet.create({
 
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        },

});