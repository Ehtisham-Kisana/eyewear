import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromCart } from "../redux/actions/Actions";
import CommonButton from "../common/CommonButton";
import { COLORS } from "../common/COLORS";

import { useNavigation } from "@react-navigation/native";
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.Reducers);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        marginTop: 25,
        backgroundColor: COLORS.secondary,
       
      }}
    >
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.dark,
          marginBottom: 5,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 15,color:'white', }}>
          Cart
        </Text>
      </View>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Items Added in Cart</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 80 }}>
          <CommonButton
            bgColor={"green"}
            textColor={"#fff"}
            title={"Checkout"}
            onPress={() => {
              navigation.navigate("Checkout");
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
