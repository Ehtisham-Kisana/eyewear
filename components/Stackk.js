import { StyleSheet, View, Text } from 'react-native';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Eyetest from './Eyetest';
import Doctors from './Eyecomponents/Doctors';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Hoom from './Hoom';
import AR from './homecomponents/AR';
import Amsler from './Eyecomponents/AmslerMethod/Amsler';

const Stack = createNativeStackNavigator();

const Stackk =()=> {
  return (
<NavigationContainer style={styles.mainContainer}>
  <Stack.Navigator  
  screenOptions={{
    headerShown: false
  }}
   initialRouteName='Hoom' 
   >
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Signup' component={Signup} />
    <Stack.Screen name='Home' component={Home}   />
    <Stack.Screen name='Eyetest' component={Eyetest}   />
    <Stack.Screen name='Doctors' component={Doctors}   />
    <Stack.Screen name='Hoom' component={Hoom}   />
    <Stack.Screen name='AR' component={AR}   />
    <Stack.Screen name='Amsler' component={Amsler} />
    
  </Stack.Navigator> 
</NavigationContainer>
  );
}
const styles = StyleSheet.create({
 mainContainer: {
  flexDirection:"column",
  backgroundColor:'rgb(242, 242, 242)',
 },

});
export default Stackk;


