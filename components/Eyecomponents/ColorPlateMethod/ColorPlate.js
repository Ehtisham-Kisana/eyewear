import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';


const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

// Color Plate Test Images from the internet
const images = [
  {uri: require('../../../assets/ColorPlates/one.png'), msg:'Hello' },
  
];


const ColorPlate = () => {
  const [currentImage, setCurrentImage] = useState(
    ['../../../assets/ColorPlates/one.png']
  );

  const handleImagePress = () => {
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>

        <Image source={images[0].uri} style={styles.image} />
        <Text>{images[0].msg}</Text>
      </TouchableOpacity>
      <Text style={styles.infoText}>
        Tap on the image to change the color plate. Try to identify the number or shape in the image.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 330,
    height: 330,
    resizeMode: 'contain',
  },
  infoText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ColorPlate;
