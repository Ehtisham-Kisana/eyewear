import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../common/CommonButton';
//import RazorpayCheckout from 'react-native-razorpay';
//import {useNavigation} from '@react-navigation/native';
import { COLORS } from "../common/COLORS";
import {addOrder} from '../redux/actions/Actions';
const Checkout = () => {
  const cartData = useSelector(state => state.Reducers);
  const addressList = useSelector(state => state.AddressReducers);
  const [selectedAddress, setSelectedAddress] = useState('');
  const dispatch = useDispatch();
  //const navigation = useNavigation();
  const getTotal = () => {
    let tempTotal = 0;
    cartData.map(item => {
      tempTotal = tempTotal + item.price;
    });
    return tempTotal;
  };
  return (
    
    <SafeAreaView style={{flex: 1, marginTop:30,
      backgroundColor: COLORS.secondary,paddingBottom:20, }}>
    <ScrollView>
        <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.dark,
        
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 15,color:'white', }}>
          Checkout
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={cartData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Image
                    source={item.image}
                    style={{width: 70, height: 70, marginLeft: 10 , borderRadius:5,}}
                  />
                  <View style={{padding: 10}}>
                    <Text style={{fontSize: 18, color:'white'}}>{item.name}</Text>
                    <Text style={{marginTop: 10,color:'white'}}>{'Rs: ' + item.price}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 30,
            borderTopWidth: 0.5,
            height: 50,
            borderTopColor: '#8e8e8e',
          }}>
          <Text style={{color:'white'}}>Total :</Text>
          <Text style={{color:'white'}}>{'Rs: ' + getTotal()}</Text>
        </View>
        <View>
          <FlatList
            data={addressList}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: '100%',

                    borderWidth: 0.2,
                    borderColor: 'white',
                    alignSelf: 'center',

                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding:5,
                  }}>
                  <View>
                    <Text style={{marginLeft: 20,color:'white'}}>{'City: ' + item.city}</Text>
                    <Text style={{marginLeft: 20,color:'white'}}>
                      {'Building: ' + item.building}
                    </Text>
                    <Text style={{marginLeft: 20, marginBottom: 10,color:'white'}}>
                      {'Pincode: ' + item.pincode}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{borderWidth: 0.2, padding: 7, marginRight: 20, borderColor:'white'}}
                    onPress={() => {
                      setSelectedAddress(
                        'City :' +
                          item.city +
                          ' ' +
                          ',Building: ' +
                          item.building +
                          ',Pincode: ' +
                          item.pincode,
                      );
                    }}>
                    <Text style={{color:'white'}}>Select address</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <Text style={{margin: 20, fontSize: 18,color:'white'}}>Select Address</Text>
        <Text style={{marginLeft: 20, fontSize: 16,color:'white'}}>
          {selectedAddress == ''
            ? 'Please Select Address From Above List'
            : selectedAddress}
        </Text>
        <CustomButton
          bgColor={COLORS.dark}
          textColor={'white'}
          title={'Place Order'}
          
        />
      </View>
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default Checkout;
