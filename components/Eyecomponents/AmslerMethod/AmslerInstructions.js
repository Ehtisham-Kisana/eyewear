import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const COLORS = {
    dark: '#041C32',
    primary: '#04293A',
    secondary: '#064663',
    light: '#ECB365',

  };

const AmslerInstructions = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.Upperbox}>
             <Text style={styles.text}>Testing Methods</Text>
         </View>
         <View style={styles.Upperbox}>
             <Text style={styles.text}>Testing Methods</Text>
         </View>
         <View style={styles.Upperbox}>
             <Text style={styles.text}>Testing Methods</Text>
         </View>
    </View>
  )
}

export default AmslerInstructions;

const styles = StyleSheet.create({
    container:{
        flex:1,     
        backgroundColor: COLORS.secondary,
        alignItems:'center',
        justifyContent:'center',
        },
        Upperbox:{
            flex:1,
            backgroundColor: COLORS.dark,
            borderWidth:3,
            borderColor:'#708090',
            margin:10,
            width:350,
            borderRadius:15,
            marginTop:55,
            alignItems:'center',
            justifyContent:'center',
            
         },
         text:{
            color: 'white',
            fontWeight:'500',
            fontSize:33,
            },
});