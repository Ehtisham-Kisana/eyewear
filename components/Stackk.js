import { StyleSheet, View, Text } from "react-native";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Eyetest from "./Eyetest";
import Doctors from "./Eyecomponents/Doctors";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hoom from "./Hoom";
//import AR from "./homecomponents/AR";
import Amsler from "./Eyecomponents/AmslerMethod/Amsler";
import AmslerInstructions from "./Eyecomponents/AmslerMethod/AmslerInstructions";
import Snellers from "./Eyecomponents/SnellersMethod/Snellers";
import SnellersInstruction from "./Eyecomponents/SnellersMethod/SnellersInstruction";
import ColorPlate from "./Eyecomponents/ColorPlateMethod/ColorPlate";
import ColorPlateInstruction from "./Eyecomponents/ColorPlateMethod/ColorPlateInstruction";
import Splash from "./Screens/Splash";
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from "./Screens/Checkout";
import OrderSucess from "./OrderSucess";
import Orders from "./Screens/Orders";


const Stack = createNativeStackNavigator();

const Stackk = () => {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Hoom"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Eyetest" component={Eyetest} />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="Hoom" component={Hoom} />
        {/* <Stack.Screen name="AR" component={AR} /> */}
        <Stack.Screen name="Amsler" component={Amsler} />
        
        
        <Stack.Screen
          name="AmslerInstructions"
          component={AmslerInstructions}
        />
        <Stack.Screen name="Snellers" component={Snellers} />
        <Stack.Screen
          name="SnellersInstruction"
          component={SnellersInstruction}
        />
        <Stack.Screen name="ColorPlate" component={ColorPlate} />
        <Stack.Screen
          name="ColorPlateInstruction"
          component={ColorPlateInstruction}
        />
        <Stack.Screen
          
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          
          name="MyAddress"
          component={MyAddress}
        />
        <Stack.Screen
          name="AddAddress"
          component={AddAddress}
        />
         <Stack.Screen
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSucess}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    backgroundColor: "rgb(242, 242, 242)",
  },
});
export default Stackk;
