import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const ColorPlate = () => {
  const [currentColor, setCurrentColor] = useState('white');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(true);
  const [score, setScore] = useState(0);

  const colors = [
    'red',
    'green',
    'blue',
    'yellow',
    'orange',
    'purple',
    'indigo',
    'violet',
    'pink',
    'black',
    'white',
  ];

  const handleCheckAnswer = () => {
    if (currentColor === colors[currentIndex]) {
      setIsCorrect(true);
      setScore(score + 1);
    } else {
      setIsCorrect(false);
    }

    if (currentIndex < colors.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCurrentColor(colors[currentIndex + 1]);
    }
  };

  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({

});

export default ColorPlate;