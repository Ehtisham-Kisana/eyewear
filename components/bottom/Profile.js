import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../common/COLORS';
import {  useState } from "react";
import { auth, db } from '../../firebase/firebase.config';
import { signOut } from "firebase/auth"; 


let name = '';
const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    getData();
    const Logout = () => {
      signOut(auth)
        .then(() => {
          navigation.replace("Login");
        })
        .catch((error) => {
          // An error happened.
        });
    };
  }, []);

  const Logout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const getData = async () => {
    name = await AsyncStorage.getItem('NAME');
  };
  return (
    <View style={{flex: 1, marginTop:25,}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',

        }}>
        <Text style={{fontWeight: '600', fontSize: 18, marginLeft: 15}}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            Logout();
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/126/126467.png",
            }}
            style={{
              width: 30,
              height: 30,
              marginRight: 20,
              marginTop:10,

            }}
          />
          <Text style={{ fontWeight: "bold" }}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../images/profile.png')}
        style={{width: 80, height: 80, alignSelf: 'center', marginTop: 30}}
      />
      <Text style={{alignSelf: 'center', marginTop: 20, fontSize: 18}}>
        {name}
      </Text>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('MyAddress');
        }}>
        <Text style={{}}>My Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.navigate('Orders');
        }}>
        <Text style={{}}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '90%',
          alignSelf: 'center',
          height: 50,
          borderBottomWidth: 0.3,
          borderBottomColor: '#8e8e8e',
          justifyContent: 'center',
        }}>
        <Text style={{}}>Offers</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
