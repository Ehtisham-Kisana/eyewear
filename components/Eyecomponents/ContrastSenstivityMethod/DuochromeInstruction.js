import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

const COLORS = {
  dark: "#041C32",
  primary: "#04293A",
  secondary: "#064663",
  light: "#ECB365",
};

const DuochromeInstruction = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.Upperbox}>
            <Text style={styles.text}>What is Duochrome?</Text>
            <Text style={styles.paragraph}>
            The Duochrome test is a simple color vision test that uses red-green or blue-yellow filters to assess the balance of the cones in the retina of the eye. 
            It can help detect color vision deficiencies such as red-green color blindness.
            </Text>
          </View>

          <View style={styles.Upperbox}>
            <Text style={styles.text}>Instructions:</Text>
            <Text style={styles.paragraph}>
              1. Hold the mobile device at arm's length. {"\n"}
              {"\n"}2. Cover one eye with the palm of your hand.
              {"\n"}
              {"\n"}3. Focus on the center of the screen and look for any color 
              differences between the two halves of the image.
              {"\n"}
              {"\n"}4. Repeat the test with the other eye.
            </Text>
          </View>

          <View style={styles.Upperbox}>
            <Text style={styles.text}>Exercise:</Text>
            <Text style={styles.paragraph}>Click start to do the test:</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("DuochromeTest");
              }}
            >
              <Text style={styles.text}>START</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DuochromeInstruction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,

  },
  Upperbox: {
    backgroundColor: COLORS.dark,
    borderWidth: 3,
    borderColor: "#708090",
    width: 350,
    borderRadius: 15,
    margin: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  paragraph: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
  btn: {
    backgroundColor: COLORS.light,
    borderWidth: 3,
    borderColor: "#708090",
    borderRadius: 15,
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
