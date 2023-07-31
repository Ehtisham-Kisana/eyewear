import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { COLORS } from '../../common/COLORS';

const DuochromeTest = ({navigation}) => {
    const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
    return (
        <View style={styles.container}>
          <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn} underlayColor="#ffffff00"  onPress={() => {
        navigation.goBack();
        }}>
      
        <Image source={require("../../DoctorModule/images/back.jpg")} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: 40}]}>Duochrome</Text>
      
      <TouchableOpacity style={styles.leftBtn} underlayColor="#ffffff00"  
      onPress={() => {
          navigation.navigate('DrHome')
        }}
        >
        <Image source={require("../../images/Drlogo.jpg")} style={styles.left} />
      </TouchableOpacity>
    </View>

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
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:COLORS.secondary,
      },

      header: {
    
        height: 100,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: COLORS.dark,
        elevation: 5,
        alignItems: 'center',
        paddingTop: 30,
      
      },
      back: {
        width: 24,
        height: 24,
      },
    
      left:{
        width: 40,
        height: 40,
        borderColor:'orange',
        borderRadius:20,
        borderWidth:2,
    
    
      },
      backBtn: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor:'white',
        marginLeft:10,
        marginTop:5,
        alignItems:'center',
      },
      
      leftBtn:{
        width: 30,
        height: 30,
        borderRadius: 15,
        top: 1,
        left: 130,
      },
    
      title: {
        fontSize: 18,
        fontWeight: '600',
        marginLeft:50,
        color:'white',
      },
    
       // heading: {
      //   fontSize: 24,
      //   fontWeight: 'bold',
      //   marginBottom: 20,
      //   color:'white',
    
      // },


      imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
        marginTop:20,
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
