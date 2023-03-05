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
  {uri: require('../../../assets/ColorPlates/one.png'), msg:'All people should see a number 12, including those with total color blindness. If someone said they cant see something, or saw something else they are fibbing' },
  {uri: require('../../../assets/ColorPlates/two.png'), msg:'Those with normal color vision see an 8. Those with red-green deficiencies see a 3. Those with total color blindness and weakness are not able to read any numeral.' },
  {uri: require('../../../assets/ColorPlates/three.png'), msg:'Those with normal color vision see an 6. Those with red-green deficiencies see a 5. Those with total color blindness and weakness are not able to read any numeral.' },
  {uri: require('../../../assets/ColorPlates/four.png'), msg:'Those with normal color vision see a 29. Those with red-green deficiencies see a 70. Those with total color blindness and weakness are not able to read any numeral.' },
  {uri: require('../../../assets/ColorPlates/five.png'), msg:'Those with normal color vision see a 57. Those with red-green deficiencies see a 35. Those with total color blindness and weakness are not able to read any numeral.' },
  {uri: require('../../../assets/ColorPlates/six.png'), msg:'Those with normal color vision see a 5. Those with red-green deficiencies see a 2. Those with total color blindness and weakness are not able to read any numeral.' },
  {uri: require('../../../assets/ColorPlates/seven.png'), msg:'Those with normal color vision see a 2. The majority of those with colorvision deficiencies are not able to read it or read it incorrectly.' },
  {uri: require('../../../assets/ColorPlates/eight.png'), msg:'Those with normal color vision see a 97. The majority of those with colorvision deficiencies are not able to read it or read it incorrectly.' },
  {uri: require('../../../assets/ColorPlates/nine.png'), msg:'Those with normal color vision see a 7. The majority of those with colorvision deficiencies are not able to read it or read it incorrectly.' },
  {uri: require('../../../assets/ColorPlates/ten.png'), msg:'Those with normal color vision should see a 26. Red color blind (protanopia) people will see a 6, mild red color blind people (mild protanomaly) will also faintly see a number 2. Green color blind (deuteranopia) people will see a 2, mild green color blind people (mild deuteranomaly) may also faintly see a number 6.' },
  {uri: require('../../../assets/ColorPlates/eleven.png'), msg:'Those with normal color vision should see a 35. Red color blind (protanopia) people will see a 5, mild red color blind people (mild protanomaly) will also faintly see a number 3. Green color blind (deuteranopia) people will see a 3, mild green color blind people (mild deuteranomaly) may also faintly see a number 5.' },  
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
      </TouchableOpacity>
      <Text style={styles.infoText}>
      {images[currentImage].msg}
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
