import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
      <Text style={styles.text}>What color is this?</Text>
      <View style={[styles.box, { backgroundColor: currentColor }]} />
      <TouchableOpacity
        style={styles.button}
        onPress={handleCheckAnswer}
      >
        <Text style={styles.buttonText}>Check Answer</Text>
      </TouchableOpacity>
      {!isCorrect && (
        <Text style={styles.incorrectText}>Incorrect!</Text>
      )}
      <Text style={styles.scoreText}>Score: {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0D7AFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  incorrectText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
    marginTop: 10,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
  },
});

export default ColorPlate;