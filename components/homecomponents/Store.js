import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const COLORS = {
  white: '#FFF',
  dark: '#000',
  primary: '#F9813A',
  secondary: '#fedac5',
  light: '#E5E5E5',
  grey: '#908e8c',
};
const glasses= [
  {
    id: '1',
    name: 'Jules',
    ingredients: 'Size: wide',
    price: '8.30',
    image: require('../../assets/jules.png'),
  },
  {
    id: '2',
    name: 'Curtis',
    ingredients: 'Size: small',
    price: '7.10',
    image: require('../../assets/curtis.png'),
  },
  {
    id: '3',
    name: 'Colin',
    ingredients: 'Size: wide',
    price: '5.10',
    image: require('../../assets/colin.png'),
  },
  {
    id: '4',
    name: 'Barber',
    ingredients: 'Size: medium',
    price: '9.55',
    image: require('../../assets/barber.png'),
  },

  {
    id: '5',
    name: 'Curtis',
    ingredients: 'Size: small',
    price: '7.10',
    image: require('../../assets/curtis.png'),
  },
  {
    id: '6',
    name: 'Colin',
    ingredients: 'Size: wide',
    price: '5.10',
    image: require('../../assets/colin.png'),
  },
  {
    id: '7',
    name: 'Barber',
    ingredients: 'Size: medium',
    price: '9.55',
    image: require('../../assets/barber.png'),
  },
  {
    id: '8',
    name: 'Jules',
    ingredients: 'Size: wide',
    price: '8.30',
    image: require('../../assets/jules.png'),
  },
  {
    id: '5',
    name: 'Curtis',
    ingredients: 'Size: small',
    price: '7.10',
    image: require('../../assets/curtis.png'),
  },
  {
    id: '9',
    name: 'Colin',
    ingredients: 'Size: wide',
    price: '5.10',
    image: require('../../assets/colin.png'),
  },
  {
    id: '10',
    name: 'Barber',
    ingredients: 'Size: medium',
    price: '9.55',
    image: require('../../assets/barber.png'),
  },
  {
    id: '11',
    name: 'Jules',
    ingredients: 'Size: wide',
    price: '8.30',
    image: require('../../assets/jules.png'),
  },
 ];

 const categories = [
  {id: '1', name: 'Goggles', image: require('../../assets/catergories/goggles.png')},
  {id: '2', name: 'Men', image: require('../../assets/catergories/men.png')},
  {id: '3', name: 'Women', image: require('../../assets/catergories/women.png')},
{id: '4', name: 'BlueRay', image: require('../../assets/catergories/blueray.png')},
 ];


const Store = () => {

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
      
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover', borderRadius:35}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({glass}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
       // onPress={() => navigation.navigate('DetailsScreen', glass)}
        >
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={glass.image} style={{height: 150, width: 150, marginTop:10, borderRadius:7}} />
          </View>
          <View style={{marginHorizontal: 10}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop:-20}}>{glass.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {glass.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${glass.price}
            </Text>
            <View style={style.addToCartBtn}>
              <MaterialIcons name="add" size={20} color={COLORS.white}  />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Customer
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
          WELCOME.
          </Text>
        </View>
        <Image
          source={require('../../assets/catergories/man.png')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <MaterialIcons name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for glasses"
          />
        </View>
        <View style={style.sortBtn}>
          <MaterialIcons name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={glasses}
        renderItem={({item}) => <Card glass={item} />}
      />
    </SafeAreaView>
  );


}

export default Store;

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 240,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



