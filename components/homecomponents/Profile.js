import * as React from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { auth } from '../../firebase/firebase.config';
import { signOut } from 'firebase/auth';


const Profile = ({navigation}) =>{
 
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
        <Text>This is Profile Page</Text>
         
     </View>
      );
}

export default Profile;


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    },
});