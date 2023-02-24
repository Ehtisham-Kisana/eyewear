import React from 'react';

// import all the components we are going to use
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const Hoom = ({navigation})=> {
  return (
    <View style={styles.container} >
      
    <TouchableOpacity  style={styles.con2} onPress={()=>{navigation.navigate('Eyetest')}}  >
          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV5ZSUyMHRlc3Rpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'}}
            imageStyle={{    borderRadius: 19, opacity:0.9     }}
             style ={styles.card}
             >
          <View style={styles.cardContainer} >
          <Text style= {styles.cardtext}> Eye Test</Text>            
          </View>
          </ImageBackground>    
  </TouchableOpacity>

  <TouchableOpacity  style={styles.con2}  onPress={()=>{navigation.navigate('Home')}} >
          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1519564463853-62962823fb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'}}
            imageStyle={{    borderRadius: 19, opacity:0.9     }}
             style ={styles.card}
             >
          <View style={styles.cardContainer} >
          <Text style= {styles.cardtext}> Store </Text>            
          </View>
          </ImageBackground>    
  </TouchableOpacity>

  <TouchableOpacity  style={styles.con2} onPress={()=>{navigation.navigate('AR')}}>
          <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1626379961798-54f819ee896a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'}}
            imageStyle={{    borderRadius: 19, opacity:0.9     }}
             style ={styles.card}
             >
          <View style={styles.cardContainer} >
          <Text style= {styles.cardtext}> AR Lens</Text>            
          </View>
          </ImageBackground>    
  </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#708090',
    },
   
    con2:{
      margin:20,
    },

    cardContainer: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    
    },

    card: {
      height: 180,
      width: 320,
    },
    
    cardtext: {
    color:'white',
    fontWeight:'600',
    fontSize:55,
    textShadowRadius:300,
    textShadowColor:'black',

    },
  });

export default Hoom;