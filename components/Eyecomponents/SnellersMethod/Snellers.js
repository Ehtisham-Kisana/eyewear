import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const COLORS = {
  dark: '#041C32',
  primary: '#04293A',
  secondary: '#064663',
  light: '#ECB365',

};


const Snellers = (navigation) => {
  
  const [size, setSize] = useState(75);  
  const [index, setIndex] = useState(0);
  const [alpha, setAlpha] =useState(
    ["E","F  P", "T  O  Z", "L P E D", "P E C F D",
     "E D F C Z P", "D E F P 0 T E C"]
  );
   
  
  const Nextslide=()=>{
    if(index===6){
      setIndex(0);
    }
    else{
      setIndex(index+1)
    }
    
  }

  return (
    <View style={styles.container}>
      
      <SafeAreaView >
        <View style={styles.test}>
        <Text style={[styles.text, {fontSize: size}]} >{alpha[index]}</Text>
        </View>
        <View style={styles.container2}>
        <TouchableOpacity style={[styles.btn, {backgroundColor:'red' }]}>
          <Text style={styles.text2}>STOP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor:'green'}]} onPress={()=>{Nextslide()}}>
          <Text style={styles.text2}>NEXT</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Snellers;

const styles = StyleSheet.create({
  container:{
    flex:1,     
    backgroundColor: COLORS.secondary,
    alignItems:'center',
    justifyContent:'center',
    },
    test:{
     
      height:320,
      width:320,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center'
    },
    text:{
      fontWeight:'bold',
    },
    container2:{
     flexDirection: 'row',
     justifyContent:'space-between',
     margin:20,
    },
    btn: {
      height:40,
      width:80,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:7,
      
    },
    text2:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
    },
})