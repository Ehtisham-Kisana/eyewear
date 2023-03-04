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
        source={{
          uri: "data:image/png;base64,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",
        }}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => handlePress("center")}
        style={styles.centerButton}
      >
        <Text style={styles.buttonText}>Center</Text>
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
    top: "42%",
    left: "42%",
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
