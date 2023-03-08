import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";

const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const images = [
  {
    uri: require("../../../assets/ColorPlates/one.png"),
    correct: "12",
    msg: "All people should see a number 12, including those with total color blindness. If someone said they cant see something, or saw something else they are fibbing",
  },
  {
    uri: require("../../../assets/ColorPlates/two.png"),
    correct: "8",
    msg: "Those with normal color vision see an 8. Those with red-green deficiencies see a 3. Those with total color blindness and weakness are not able to read any numeral.",
  },
  {
    uri: require("../../../assets/ColorPlates/three.png"),
    correct: "6",
    msg: "Those with normal color vision see an 6. Those with red-green deficiencies see a 5. Those with total color blindness and weakness are not able to read any numeral.",
  },
  {
    uri: require("../../../assets/ColorPlates/four.png"),
    correct: "29",
    msg: "Those with normal color vision see a 29. Those with red-green deficiencies see a 70. Those with total color blindness and weakness are not able to read any numeral.",
  },
  {
    uri: require("../../../assets/ColorPlates/five.png"),
    correct: "57",
    msg: "Those with normal color vision see a 57. Those with red-green deficiencies see a 35. Those with total color blindness and weakness are not able to read any numeral.",
  },
  {
    uri: require("../../../assets/ColorPlates/six.png"),
    correct: "5",
    msg: "Those with normal color vision see a 5. Those with red-green deficiencies see a 2. Those with total color blindness and weakness are not able to read any numeral.",
  },
  {
    uri: require("../../../assets/ColorPlates/seven.png"),
    correct: "2",
    msg: "Those with normal color vision see a 2. The majority of those with colorvision deficiencies are not able to read it or read it incorrectly.",
  },
  {
    uri: require("../../../assets/ColorPlates/eight.png"),
    correct: "97",
    msg: "Those with normal color vision see a 97. The majority of those with colorvision deficiencies are not able to read it or read it incorrectly.",
  },
  {
    uri: require("../../../assets/ColorPlates/nine.png"),
    correct: "7",
    msg: "Those with normal color vision see a 7. The majority of those with colorvision deficiencies are not able to read it or read it incorrectly.",
  },
  {
    uri: require("../../../assets/ColorPlates/ten.png"),
    correct: "26",
    msg: "Those with normal color vision should see a 26. Red color blind (protanopia) people will see a 6, mild red color blind people (mild protanomaly) will also faintly see a number 2. Green color blind (deuteranopia) people will see a 2, mild green color blind people (mild deuteranomaly) may also faintly see a number 6.",
  },
  {
    uri: require("../../../assets/ColorPlates/eleven.png"),
    correct: "35",
    msg: "Those with normal color vision should see a 35. Red color blind (protanopia) people will see a 5, mild red color blind people (mild protanomaly) will also faintly see a number 3. Green color blind (deuteranopia) people will see a 3, mild green color blind people (mild deuteranomaly) may also faintly see a number 5.",
  },
];



const ColorPlate = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [result, setresult] = useState(false);
  const ShowResult = () => {
    setresult(!result);
  };

  const Nextslide = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    
    <View style={styles.container}>
    
      <Image style={styles.test} source={images[currentImage].uri} />

      <View style={styles.container2}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "blue", marginRight:160 }]}
          onPress={() => {
            ShowResult();
          }}
        >
          <Text style={styles.text2}>RESULT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: "green" }]}
          onPress={() => {
            Nextslide();
            setresult(false);
          }}
        >
          <Text style={styles.text2}>NEXT</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.container3}>
        {result ? (
          <Text style={styles.text3}> {images[currentImage].msg} </Text>
          
                  ) : (
          <Text style={styles.text3}>Result will be displayed here. </Text>
        )}
        
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    height: 340,
    width: 340,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  btn: {
    height: 40,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  container3: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderColor: COLORS.dark,
    borderWidth: 3,
    borderRadius: 18,
    backgroundColor: COLORS.primary,
  },
  text3: {
    color: "white",
    fontSize: 16,
  },
});

export default ColorPlate;
