import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


const COLORS = {
   white: '#FFF',
   dark: '#000',
   primary: '#F9813A',
   secondary: '#fedac5',
   light: '#E5E5E5',
   grey: '#908e8c',
 };

const Main = ({navigation}) =>{
    return (
     <View style={styles.Maincontainer}>
      <View style={styles.Upperbox}>
 
      </View>
      <View style={styles.Container}>
        <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate('Eyetest')}}>
         <Text style={styles.text} >Eyes Checkup</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.box}  onPress={()=>{navigation.navigate('AR')}}>
         <Text style={styles.text}>Try frames with AR </Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.box} onPress={()=>{navigation.navigate('Store')}}>
         <Text style={styles.text}>Glasses Shop</Text>
        </TouchableOpacity>
        </View>
    
     </View>
      );
}

export default Main;

const styles = StyleSheet.create({
Maincontainer:{
    backgroundColor: COLORS.white,
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',

},

Upperbox:{
   backgroundColor: COLORS.light,
   padding:80,
   borderWidth:3,
   borderColor:COLORS.primary,
   margin:10,
   width:340,
   borderRadius:15,
 
},

Container:{
   flex:2,
   backgroundColor:COLORS.white,
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
},

 box: {
    backgroundColor:COLORS.primary,
    padding:20,
    borderWidth:3,
    borderColor:COLORS.primary,
    margin:10,
    width:250,
    borderRadius:27,


 },
text: {
   alignSelf:'flex-start',
   fontWeight: '700',
   color: COLORS.white,
   fontSize:19,

},


});