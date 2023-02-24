import React from "react";
import { View, Text,Button, StyleSheet } from "react-native";

const Doctors=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>This is Doctor page</Text>
            <Button title="Go to Hoom page" onPress={()=>{navigation.navigate('Hoom')}} />
        </View>
    );
}

export default Doctors;

const styles = StyleSheet.create({
 
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        },

});