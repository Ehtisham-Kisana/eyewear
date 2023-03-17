import * as React from "react";
import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { auth, db } from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { collection, setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { async } from "@firebase/util";

const Profile = ({ navigation }) => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const saveData = async () => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      Name: name,
      Address: address,
      Phone: phone,
    }).then(() => {
      alert("Submitted successfully");
    });
  };
  const updateData = async () => {
 
    const docRef = doc(db, "users", auth.currentUser.uid);

    await updateDoc(docRef, {
      Name: name,
      Address: address,
      Phone: phone,
    }).then(() => {
      alert("updated successfully");
    });
  };

  useEffect(()=>{
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            Logout();
          }}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/126/126467.png",
            }}
            style={{
              width: 30,
              height: 30,
              marginRight: 20,
            }}
          />
          <Text style={{ fontWeight: "bold" }}>Logout</Text>
        </TouchableOpacity>
      ),
    });

    const Logout = () => {
      signOut(auth)
        .then(() => {
          navigation.replace("Login");
        })
        .catch((error) => {
          // An error happened.
        });
    };

  },[]);

  useEffect(() => {
    
    const readData = async () => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setName(docSnap.data().Name);
        setAddress(docSnap.data().Address);
        setPhone(docSnap.data().Phone);
      }
      readData();
    };

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        onChangeText={(text) => setPhone(text)}
        keyboardType="numeric"
        value={phone}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />

      {address === null && (
        <Button title="Submit" onPress={() => saveData()}></Button>
      )}

      {address !== null && (
        <Button title="Update" onPress={() => updateData()}></Button>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 50,
  },

  input: {
    borderWidth: 1,
    borderColor: "black",
    height: 50,
    width: 350,
    padding: 10,
    fontSize: 20,
    borderRadius: 9,
    backgroundColor: "white",
    margin: 10,
  },
});
