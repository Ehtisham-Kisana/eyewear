import { StyleSheet, View, Text } from "react-native";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Eyetest from "./Eyetest";
import Doctors from "./Eyecomponents/Doctors";
import DuochromeTest from "./Eyecomponents/ContrastSenstivityMethod/DuochromeTest";
import { COLORS } from "./common/COLORS";
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
import DuochromeInstruction from "./Eyecomponents/ContrastSenstivityMethod/DuochromeInstruction";
import Splash from "./Screens/Splash";
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from "./Screens/Checkout";
import OrderSucess from "./OrderSucess";
import Orders from "./Screens/Orders";
import DrHome from "./DoctorModule/screens/DrHome";
import BookAppointment from "./DoctorModule/screens/BookAppointment";
import Success from "./DoctorModule/screens/Success";
import Pending from "./DoctorModule/screens/Pending";
import Completed from "./DoctorModule/screens/Completed";
import CallAmb from "./DoctorModule/screens/CallAmb";
import OdrSuccess from "./Screens/OdrSuccess";


const Stack = createNativeStackNavigator();

const Stackk = () => {
  return (
    <NavigationContainer style={styles.mainContainer}>
      <Stack.Navigator
        initialRouteName="Hoom"
      >
        <Stack.Screen name="Login" component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen name="Signup" component={Signup} 
        options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home}
         options={{headerShown: false}} />
        <Stack.Screen name="Eyetest" component={Eyetest} 
        options={{headerShown: false}}
        // options={{
        //   title: 'Testing Methods',
        //   headerStyle: {
        
        //     backgroundColor: COLORS.dark,
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
            
        //   },
        //   headerTitleAlign: 'center',
          
        // }}
        />
        <Stack.Screen name="Doctors" component={Doctors} />
        <Stack.Screen name="Hoom" component={Hoom} 
        options={{headerShown: false}} />
        {/* <Stack.Screen name="AR" component={AR} /> */}
        <Stack.Screen name="Amsler" component={Amsler} 
        options={{
          title: 'Amsler Test',
          headerStyle: {
        
            backgroundColor: COLORS.dark,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          headerTitleAlign: 'center',
        }} />
        
        
        <Stack.Screen
          name="AmslerInstructions"
          component={AmslerInstructions}
          options={{
            title: 'Amsler Instructions',
            headerStyle: {
          
              backgroundColor: COLORS.dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Snellers" component={Snellers}
        options={{
          title: 'Snellers Test',
          headerStyle: {
        
            backgroundColor: COLORS.dark,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen
          name="SnellersInstruction"
          component={SnellersInstruction}
          options={{
            title: 'Snellers Instruction',
            headerStyle: {
          
              backgroundColor: COLORS.dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="ColorPlate" component={ColorPlate} 
        options={{
          title: 'Color Plate Test',
          headerStyle: {
        
            backgroundColor: COLORS.dark,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
          headerTitleAlign: 'center',
        }}
        />
        <Stack.Screen
          name="ColorPlateInstruction"
          component={ColorPlateInstruction}
          options={{
            title: 'Color Plate Instruction',
            headerStyle: {
          
              backgroundColor: COLORS.dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerTitleAlign: 'center',
          }}
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
          options={{
            title: 'Checkout',
            headerStyle: {
          
              backgroundColor: COLORS.dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="OrderSuccess"
          component={OrderSucess}
        />
        <Stack.Screen
          name="OdrSuccess"
          component={OdrSuccess}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
        />
        <Stack.Screen
          name="DuochromeInstruction"
          component={DuochromeInstruction}
          options={{
            title: 'Duochrome Instructions',
            headerStyle: {
          
              backgroundColor: COLORS.dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="DuochromeTest"
          component={DuochromeTest}
          options={{
            title: 'Duochrome test',
            headerStyle: {
          
              backgroundColor: COLORS.dark,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              
            },
            headerTitleAlign: 'center',
          }}
        />

        {/* DoctorModule */}
        <Stack.Screen
          component={DrHome}
          name="DrHome"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BookAppointment}
          name="BookAppointment"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Success}
          name="Success"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Pending}
          name="Pending"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Completed}
          name="Completed"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={CallAmb}
          name="CallAmb"
          options={{headerShown: false}}
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
