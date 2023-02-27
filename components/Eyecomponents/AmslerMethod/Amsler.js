import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Amsler = () => {
  const [results, setResults] = useState('');

  const handlePress = (location) => {
    if (location === 'center') {
      setResults('No distortion detected.');
    } else {
      setResults('Distortion detected. Please consult an eye doctor.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'data:image/png;base64,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' }}
        style={styles.image}
      />
      <TouchableOpacity
        onPress={() => handlePress('center')}
        style={styles.centerButton}
      >
        <Text style={styles.buttonText}>Center</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress('upper-left')}
        style={styles.cornerButton}
      >
        <Text style={styles.buttonText}>Upper Left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress('upper-right')}
        style={[styles.cornerButton, { right: 0 }]}
      >
        <Text style={styles.buttonText}>Upper Right</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress('lower-left')}
        style={[styles.cornerButton, { bottom: 0 }]}
      >
        <Text style={styles.buttonText}>Lower Left</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress('lower-right')}
        style={[styles.cornerButton, { bottom: 0, right: 0 }]}
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  centerButton: {
    position: 'absolute',
    top: '42%',
    left: '42%',
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  cornerButton: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#000',
    zIndex: 1,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 25,
  },
  resultText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Amsler;
