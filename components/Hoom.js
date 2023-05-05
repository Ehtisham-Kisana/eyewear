import React from "react";

// import all the components we are going to use
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const Hoom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.con2}
        onPress={() => {
          navigation.navigate("Eyetest");
        }}
      >
        <ImageBackground
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          imageStyle={{ borderRadius: 19, opacity: 0.9 }}
          style={styles.card}
        >
          <View style={styles.cardContainer}>
            <Text style={styles.cardtext}> Eye Test</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.con2}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1519564463853-62962823fb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xhc3NlcyUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          }}
          imageStyle={{ borderRadius: 19, opacity: 0.9 }}
          style={styles.card}
        >




          
          <View style={styles.cardContainer}>
            <Text style={styles.cardtext}> Store </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.con2}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1626379961798-54f819ee896a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF1Z21lbnRlZCUyMHJlYWxpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
          }}
          imageStyle={{ borderRadius: 19, opacity: 0.9 }}
          style={styles.card}
        >
          <View style={styles.cardContainer}>
            <Text style={styles.cardtext}> AR Lens</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#708090",
  },

  con2: {
    margin: 20,
  },

  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    height: 180,
    width: 320,
  },

  cardtext: {
    color: "white",
    fontWeight: "600",
    fontSize: 55,
    textShadowRadius: 300,
    textShadowColor: "black",
  },
});

export default Hoom;
