import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";


const Amsler = () => {
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
       <Image
        
        source={require('../../../assets/Amsler/AmslerTest.png')}
        style={styles.image}
      />
      
      <TouchableOpacity
        onPress={() => handlePress("center")}
        style={[styles.centerButton, { bottom: 180 }]}
      >
        <Text style={[styles.buttonText,{textDecorationLine: 'underline', fontWeight:'bold', fontSize:20,}]}>Center</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("upper-left")}
        style={[styles.cornerButton, { top: 120, left: 20 }]}
      >
        <Text style={styles.buttonText}>Upper Left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("upper-right")}
        style={[styles.cornerButton, { top: 120, right: 20 }]}
      >
        <Text style={styles.buttonText}>Upper Right</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("lower-left")}
        style={[styles.cornerButton, { bottom: 120, left: 20 }]}
      >
        <Text style={styles.buttonText}>Lower Left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress("lower-right")}
        style={[styles.cornerButton, { bottom: 120, right: 20 }]}
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
