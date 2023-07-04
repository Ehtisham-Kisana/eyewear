import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
//import CommonBtn from '../components/CommonBtn';

const CallAmb = () => {
  return (
    <View style={styles.container}>
      <Header icon={require('../images/back.jpg')} title={'Call Ambulance'} />
      <TextInput placeholder="Address" style={styles.address} />

      <TouchableOpacity style={{
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor:'blue',
            margin:30,
            marginLeft: 80,
          }}
          
          >
            <Text style={{color: '#fff', fontSize: 16}}>Call Now</Text>
          </TouchableOpacity>
    </View>
  );
};

export default CallAmb;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  address: {
    height: 50,
    width: '90%',
    borderWidth: 0.5,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: 'center',
    paddingLeft: 20,
  },
});
