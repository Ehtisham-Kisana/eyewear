import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'


const COLORS = {
  dark: '#041C32',
  primary: '#04293A',
  secondary: '#064663',
  light: '#ECB365',

};


const SnellersInstruction = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <ScrollView>
       <View style={styles.Upperbox}>
             <Text style={styles.text}>What is Visual Acuity?</Text>
             <Text style={styles.paragraph}>Visual acuity is a measure of how well you see or the sharpness and clarity of your vision.</Text>
         </View>
         
         <View style={styles.Upperbox}>
             <Text style={styles.text}>Instructions:</Text>
             <Text style={styles.paragraph}>1. Place your phone approx. 30 cm/12 inches from your eyes. {'\n'}
             {'\n'}2. Cover your left eye with your left hand. 
             {'\n'}{'\n'}3.  Read the numbers on the screen loud. When you can no longer read more than half the
                           numbers press stop. The smallest numbers you are able to read will be recorded as your acuity.
             {'\n'}{'\n'}4. Now repeat all steps, covering your right eye.
            </Text>
         </View>

         <View style={styles.Upperbox}>
             <Text style={styles.text}>Exercise:</Text>
             <Text style={styles.paragraph}>Click start to do the test:</Text>
             <TouchableOpacity style={styles.btn}  onPress={()=>{navigation.navigate('Snellers')}}>
              <Text style={styles.text}>START</Text>
             </TouchableOpacity>
         </View>

         </ScrollView>
         </View>
    </View>
  )
}

export default SnellersInstruction;

const styles = StyleSheet.create({
  container:{
    flex:1,     
    backgroundColor: COLORS.secondary,
    alignItems:'center',
    justifyContent:'center',
  
    },
    container2:{
      flex:1,
      marginTop:50,
    },
    Upperbox:{
        backgroundColor: COLORS.dark,
        borderWidth:3,
        borderColor:'#708090',
        width:350,
        borderRadius:15,
        margin:5,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
     },
     text:{
        color: 'white',
        fontWeight:'bold',
        fontSize:20,
        },
     paragraph:{
      color:'white',
      fontSize:16,
      padding:10,
     },
     btn:{
      backgroundColor:COLORS.light,
      borderWidth:3,
      borderColor:'#708090',
      borderRadius:15,
      width:120,
      height:50,
      alignItems:'center',
      justifyContent:'center',
     },
});