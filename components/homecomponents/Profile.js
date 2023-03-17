import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image, TextInput, AsyncStorage } from 'react-native';
import { auth,db } from '../../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 
import { async } from '@firebase/util';



const Profile = ({navigation}) =>{

  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phone, setPhone] = useState(null);
 
  const saveData = async()=>{
    // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "users"), {
  Name:name,
  Address:address,
  Phone:phone
});
console.log("Document written with ID: ", docRef.id);
  }
    useEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>(
              <TouchableOpacity onPress={()=>{Logout()}}>
                <Image 
                source={{
                    uri:"https://cdn-icons-png.flaticon.com/512/126/126467.png"
                }}
                style={{
                    width:30,
                    height:30,
                    marginRight:20,
                }}
                />
                <Text style={{fontWeight:"bold"}} >Logout</Text>
              </TouchableOpacity>
            ),
        });

        const Logout=()=>{
            signOut(auth)
            .then(() => {
                 navigation.replace("Login");
              })
              .catch((error) => {
                // An error happened.
              });
        }
    },[]);


    return (
     <View style={styles.container}>
        <Text style={styles.title}>Profile Screen</Text>

        <TextInput style={styles.input}
        placeholder="Full Name"
        onChangeText={(text)=>setName(text)}
        
        />
        <TextInput style={styles.input}
        placeholder="Phone"
        onChangeText={(text)=>setPhone(text)}
        keyboardType="numeric"
        
        />
        <TextInput style={styles.input}
        placeholder="Address"
        onChangeText={(text)=>setAddress(text)}
        
        />
         
         <Button title='Submit' onPress={()=> saveData()}></Button>
     </View>
      );
}

export default Profile;


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    margin:20,

    },

    title:{
      fontWeight:'bold',
      fontSize:30,
      marginBottom:50,
    },

    input:{
      borderWidth:1,
      borderColor:'black',
      height:50,
      width:350,
      padding:10,
      fontSize:20,
      borderRadius:9,
      backgroundColor:'white',
      margin:10,
    },
});