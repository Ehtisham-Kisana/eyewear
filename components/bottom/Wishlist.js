import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { COLORS } from "../common/COLORS";
import {
  addItemToCart,
  removeFromCart,
  removeFromWishlist,
} from "../redux/actions/Actions";

const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector((state) => state.Reducers2);
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        marginTop: 25,
        backgroundColor: COLORS.secondary,
        marginBottom: 70,
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
          Wishlist
        </Text>
      </View>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              isWishlist={"swe"}
              item={item}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Wishlist;
