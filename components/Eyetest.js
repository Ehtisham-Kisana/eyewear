import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Button
} from "react-native";


const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const Eyetest = ({ navigation }) => {
  return (

    <View style={styles.container}>
    
      <View style={styles.lowerbox}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            navigation.navigate("AmslerInstructions");
          }}
        >
          <Text style={styles.textBox}> Amsler Grid </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            navigation.navigate("SnellersInstruction");
          }}
        >
          <Text style={styles.textBox}> Snellers </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} 
            onPress={() => {
              navigation.navigate("ColorPlateInstruction");
            }}>
          <Text style={styles.textBox}
          >
            {" "}
            Color Plate Test{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box} onPress={() => {
              navigation.navigate("DuochromeInstruction");
            }}>
          <Text style={styles.textBox}> Duochrome Test </Text>
        </TouchableOpacity>
      </View>
      
      {/* <Button title="Go to Doctors page" onPress={()=>{navigation.navigate('DrHome')}} /> */}
      
    </ View>
  );
};

export default Eyetest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  
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
    left: 100,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft:50,
    color:'white',
  },

  
  lowerbox: {
    flex: 3,
    margin: 10,
    width: 350,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 33,
  },
  box: {
    flex: 1,
    backgroundColor: COLORS.dark,
    borderWidth: 3,
    borderColor: "white",
    width: 280,
    margin: 17,
    padding: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    color: "white",
    fontWeight: "500",
    fontSize: 23,
  },
});

{/* <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn} underlayColor="#ffffff00"  onPress={() => {
        navigation.goBack();
        }}>
      
        <Image source={require("../components/DoctorModule/images/back.jpg")} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: 30}]}>Testing Methods</Text>
      
      <TouchableOpacity style={styles.leftBtn} underlayColor="#ffffff00"  
      onPress={() => {
          navigation.navigate('DrHome')
        }}
        >
        <Image source={require("../components/images/Drlogo.jpg")} style={styles.left} />
      </TouchableOpacity>
    </View>  
     */}