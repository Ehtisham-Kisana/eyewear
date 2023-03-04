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

const AmslerInstructions = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ScrollView>
          <View style={styles.Upperbox}>
            <Text style={styles.text}>What is an Amsler Grid?</Text>
            <Text style={styles.paragraph}>
              The Amsler grid is a grid of horizontal and vertical lines used to
              monitor a person's central visual field. It is a diagnostic tool
              that aids in the detec- tion of visual disturbances caused by
              changes in the retina, particularly the macula, as well as the
              optic nerve and the visual pathway to the brain.
            </Text>
          </View>

          <View style={styles.Upperbox}>
            <Text style={styles.text}>Instructions:</Text>
            <Text style={styles.paragraph}>
              1. Place your phone approx. 30 cm/12 inches from your eyes with
              the grid set at eye level. {"\n"}
              {"\n"}2. Look at the dot in the center of the grid.
              {"\n"}
              {"\n"}3. Cover your left eye with your left hand while continuing
              to look at the dot with your right eye. Do not move your gaze from
              the dot.
              {"\n"}
              {"\n"}4. Did the dot or squares around the dot change shapes or
              disappear when you covered one eye? Do you see any blur or
              distortion in the grid?
              {"\n"}
              {"\n"}5. Now repeat all steps, covering your right eye.
            </Text>
          </View>

          <View style={styles.Upperbox}>
            <Text style={styles.text}>Exercise:</Text>
            <Text style={styles.paragraph}>Click start to do the test:</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                navigation.navigate("Amsler");
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

export default AmslerInstructions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    flex: 1,
    marginTop: 50,
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
