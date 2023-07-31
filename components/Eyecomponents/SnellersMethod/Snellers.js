import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";


const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const Snellers = ({navigation}) => {
  const [size, setSize] = useState(75);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0.0);
  const [alpha, setAlpha] = useState([
    "E",
    "F  P",
    "T  O  Z",
    "L   P   E   D",
    "P   E   C   F   D",
    "E    D    F    C    Z    P",
    "D     E     F     P     O     T     E     C",
  ]);

  const showScore = () => {
    switch (index) {
      case 0:
        return setScore(0.25);
      case 1:
        return setScore(0.32);

      case 2:
        return setScore(0.4);

      case 3:
        return setScore(0.5);

      case 4:
        return setScore(0.63);

      case 5:
        return setScore(0.8);

      case 6:
        return setScore(1.0);

      default:
        return setSize(0.0);
    }
  };

  const sizeHandler = () => {
    switch (index) {
      case 0:
        return setSize(65);

      case 1:
        return setSize(55);

      case 2:
        return setSize(45);

      case 3:
        return setSize(35);

      case 4:
        return setSize(25);

      case 5:
        return setSize(15);

      default:
        return setSize(75);
    }
  };

  const Nextslide = () => {
    if (index === 6) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    sizeHandler();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.backBtn} underlayColor="#ffffff00"  onPress={() => {
        navigation.goBack();
        }}>
      
        <Image source={require("../../DoctorModule/images/back.jpg")} style={styles.back} />
      </TouchableOpacity>

      <Text style={[styles.title, {marginLeft: 30}]}>Snellers</Text>
      
      <TouchableOpacity style={styles.leftBtn} underlayColor="#ffffff00"  
      onPress={() => {
          navigation.navigate('DrHome')
        }}
        >
        <Image source={require("../../images/Drlogo.jpg")} style={styles.left} />
      </TouchableOpacity>
    </View>
      <SafeAreaView>
        <View style={styles.test}>
          <Text style={[styles.text, { fontSize: size }]}>{alpha[index]}</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: "red" }]}>
            <Text
              style={styles.text2}
              onPress={() => {
                showScore();
              }}
            >
              STOP
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "green" }]}
            onPress={() => {
              Nextslide();
            }}
          >
            <Text style={styles.text2}>NEXT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <Text style={styles.text3}>Score:</Text>
          <View style={styles.result}>
            <Text style={styles.text4}>{score}</Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={styles.text5}
              onPress={() => {
                setScore(0.0);
              }}
            >
              reset
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Snellers;

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
    marginBottom:110, 
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
    left: 160,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft:50,
    color:'white',
  },

  


  test: {
    height: 320,
    width: 320,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  btn: {
    height: 40,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  container3: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text3: {
    color: COLORS.light,
    fontWeight: "bold",
    fontSize: 30,
  },
  result: {
    backgroundColor: COLORS.dark,
    height: 50,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 9,
  },
  text4: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  text5: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
