import React from "react";
import { View, Text, TouchableOpacity,StyleSheet, FlatList } from "react-native";
import { useState } from "react";

const COLORS = {
    dark: '#041C32',
    primary: '#04293A',
    secondary: '#064663',
    light: '#ECB365',

  };
 

const Eyetest=({navigation})=>{
const [methods, setMethods] = useState([
    {name:'Amsler Grid', key:'1'},
    {name:'Snellers', key:'2'},
    {name:'Color Plate Test', key:'3'},
    {name:'Color Cube Test', key:'4'},
]);

    return(
        <View style={styles.container}>
           <View style={styles.Upperbox}>
             <Text style={styles.text}>Testing Methods</Text>
         </View>
         <View style={styles.lowerbox}>
          <FlatList 
          data={methods}
          renderItem={({item})=>(
            <TouchableOpacity style={styles.box}>
            <Text style={styles.textBox}> {item.name} </Text>
            </TouchableOpacity>
          )}
          />  
                       
         </View>          
          {/* <Text>This is Eyetest page</Text>
          <Button title="Go to Doctors page" onPress={()=>{navigation.navigate('Doctors')}} />
          <Button title="Go to Hoom page" onPress={()=>{navigation.navigate('Hoom')}} /> */}
        </View>
    );
}

export default Eyetest;

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
         lowerbox:{
            flex:3,
            backgroundColor: COLORS.dark,
            borderWidth:3,
            borderColor:'#708090',
            margin:10,
            width:350,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
         },
         text:{
            color: 'white',
            fontWeight:'500',
            fontSize:33,
            },
         box:{
            flex:1,
            backgroundColor: COLORS.primary,
            borderWidth:3,
            borderColor:COLORS.secondary,
            width:280,
            margin:17,
            padding:30,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
          
         },
          textBox:{
          color: 'white',
          fontWeight:'500',
          fontSize:23,
          },


});