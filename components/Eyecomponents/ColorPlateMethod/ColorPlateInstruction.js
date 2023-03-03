import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const COLORS = {
    dark: '#041C32',
    primary: '#04293A',
    secondary: '#064663',
    light: '#ECB365',
  
  };

const ColorPlateInstruction = ({navigation}) => {
  return (
<View style={styles.container}>
      <View style={styles.container2}>
      <ScrollView>
       <View style={styles.Upperbox}>
             <Text style={styles.text}>What is a Color Plate test?</Text>
             <Text style={styles.paragraph}>
The Color Plate test is a test to measure your ability to perceive differences between colours. Color blindness is most often of genetic nature, but may also occur because of eye, nerve, or brain damage, or due to exposure to certain chemicals.</Text>
         </View>
         
         <View style={styles.Upperbox}>
             <Text style={styles.text}>Instructions:</Text>
             <Text style={styles.paragraph}>1. Place your phone approx. 30 cm/12 inches from your eyes with each circle set at eye level. {'\n'}
             {'\n'}2. Try to identify the hidden number in 5 seconds, however there is no time limit. Then click the image to see the answer with an analysis
             {'\n'}{'\n'}3. By clicking Next continue to the next test and complete all the 15 tests to identify your color blindness severity.
            </Text>
         </View>

         <View style={styles.Upperbox}>
             <Text style={styles.text}>Exercise:</Text>
             <Text style={styles.paragraph}>Click start to do the test:</Text>
             <TouchableOpacity style={styles.btn}  onPress={()=>{navigation.navigate('ColorPlate')}}>
              <Text style={styles.text}>START</Text>
             </TouchableOpacity>
         </View>

         </ScrollView>
         </View>
    </View>
  )
}

export default ColorPlateInstruction

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
})