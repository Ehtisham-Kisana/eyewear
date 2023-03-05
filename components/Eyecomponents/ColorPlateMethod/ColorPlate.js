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
  {uri: require('../../../assets/ColorPlates/two.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/three.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/four.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/five.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/six.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/seven.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/eight.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/nine.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/ten.png'), msg:'Hello' },
  {uri: require('../../../assets/ColorPlates/eleven.png'), msg:'Hello' },  
];


const ColorPlate = () => {
  const [currentImage, setCurrentImage] = useState(0);

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

        <Image source={images[currentImage].uri} style={styles.image} />
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
