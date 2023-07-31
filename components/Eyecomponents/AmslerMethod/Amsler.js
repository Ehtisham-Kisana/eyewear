import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};


const Amsler = ({navigation}) => {
  const [results, setResults] = useState("");

  const handlePress = (location) => {
    if (location === "center") {
      setResults("No distortion detected.");
    } else {
      setResults("Distortion detected. Please consult an eye doctor.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn} underlayColor="#ffffff00"  onPress={() => {
        navigation.goBack();
        }}>
      
        <Image source={require("../../DoctorModule/images/back.jpg")} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: 30}]}>Amsler Grid</Text>
      
      <TouchableOpacity style={styles.leftBtn} underlayColor="#ffffff00"  
      onPress={() => {
          navigation.navigate('DrHome')
        }}
        >
        <Image source={require("../../images/Drlogo.jpg")} style={styles.left} />
      </TouchableOpacity>
    </View>


       <Image
        
        source={require('../../../assets/Amsler/AmslerTest.png')}
        style={styles.image}
      />
      
      <TouchableOpacity
        onPress={() => handlePress("center")}
        style={[styles.centerButton, { bottom: 140 }]}
      >
        <Text style={[styles.buttonText,{textDecorationLine: 'underline', fontWeight:'bold', fontSize:20,}]}>Center</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("upper-left")}
        style={[styles.cornerButton, { top: 100, left: 20 }]}
      >
        <Text style={styles.buttonText}>Upper Left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("upper-right")}
        style={[styles.cornerButton, { top: 100, right: 20 }]}
      >
        <Text style={styles.buttonText}>Upper Right</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("lower-left")}
        style={[styles.cornerButton, { bottom: 70, left: 20 }]}
      >
        <Text style={styles.buttonText}>Lower Left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("lower-right")}
        style={[styles.cornerButton, { bottom: 70, right: 20 }]}
      >
        <Text style={styles.buttonText}>Lower Right</Text>
      </TouchableOpacity>
      {results ? <Text style={styles.resultText}>{results}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: COLORS.dark,
    elevation: 5,
    alignItems: 'center',
    paddingTop: 30,
  
  },
  back: {
    width: 24,
    height: 24,
  },

  left:{
    width: 40,
    height: 40,
    borderColor:'orange',
    borderRadius:20,
    borderWidth:2,


  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor:'white',
    marginLeft:10,
    marginTop:5,
    alignItems:'center',
  },
  
  leftBtn:{
    width: 30,
    height: 30,
    borderRadius: 15,
    top: 1,
    left: 130,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft:50,
    color:'white',
  },

  

  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },
  centerButton: {
    position: "absolute",
    backgroundColor: "transparent",
    
  },
  cornerButton: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#000",
    zIndex: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginTop: 25,
    
  },
  resultText: {
    position: "absolute",
    bottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "orange",
  },
});

export default Amsler;
