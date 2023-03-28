import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../common/COLORS';

const DuochromeTest = () => {
    const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
    return (
        <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://www.thomson-software-solutions.com/OnlineResources/Test%20Chart%202016/Help/lib/NewItem282.png' }}
            style={styles.image}
          />
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'red' && styles.selectedOption]}
            onPress={() => handleOptionSelect('red')}
          >
            <Text style={styles.optionText}>Red</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'green' && styles.selectedOption]}
            onPress={() => handleOptionSelect('green')}
          >
            <Text style={styles.optionText}>Green</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.instructionText}>
          Select the color that is clearer and easier to read.
        </Text>
        <Text style={styles.resultText}>
          {selectedOption ? `You selected ${selectedOption}` : ''}
        </Text>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor:COLORS.secondary,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'white',
      },
      imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      image: {
        width: 350,
        height: 350,
      },
      optionsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      option: {
        borderWidth: 1,
        borderColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginRight: 10,
      },
      optionText: {
        fontSize: 18,
        color:'white',
      },
      selectedOption: {
        backgroundColor: COLORS.light,
      },
      instructionText: {
        fontSize: 16,
        marginBottom: 10,
        color:'white',
      },
      resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        color:'white',
      },
  });

export default DuochromeTest;
