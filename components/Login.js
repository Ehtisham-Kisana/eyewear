import React from 'react';
import { useState, useEffect } from 'react';
import {   StyleSheet, Text, TextInput, View , TouchableOpacity, Image} from 'react-native';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const Login=({navigation})=>{
  const[email, setEmail]=useState(null);
  const[password, setPasssword]=useState(null);
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       navigation.replace('Hoom');
      } 
    });
  },[]);


  const login=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    alert("succesfully logged in");
    navigation.navigate('Hoom');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }


return(
 <View style={styles.container}>
<View style={styles.box1}>
<Text style={styles.Text1}>Login</Text>
</View>

<View style={styles.box2}>
<View>
  <TextInput 
    style={styles.input1}
    placeholder="Username or Email"
    onChangeText={(text)=>{setEmail(text)}}
/>
  </View>
<View>
<TextInput 
    style={styles.input1}
    placeholder="Password"
    secureTextEntry={true}
    onChangeText={(text)=>{setPasssword(text)}}
   />
</View>
</View>

<TouchableOpacity style={styles.box3}>
<Text style={styles.Text2} onPress={()=>{login()}}>LOGIN</Text>
</TouchableOpacity>
<View style={styles.nav}>
<Text>Don't have an account? 
</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('Signup')}} ><Text style={styles.tex}>Signup</Text></TouchableOpacity>
</View>

{/* line */}
<View style={styles.lineStyle}>
<View>
  <Text>---------------</Text>
</View>
<View>
    <Text style={{width:50, textAlign:'center'}}>
     Or
    </Text>
</View>
<View>
  <Text>---------------</Text>
</View>
</View>


<View style={styles.box5}>
<TouchableOpacity>
<Image
        style={styles.subBox1}
        source={{
         uri:'data:image/png;base64,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',
        }}
      />
</TouchableOpacity>

<TouchableOpacity>
<Image
        style={styles.subBox1}
        source={{
         uri:'data:image/png;base64,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',
        }}
      />
</TouchableOpacity>

</View>


 </View>

);
}

export default Login;

const styles = StyleSheet.create({
container:{
 flexDirection:'column',
 justifyContent:'center',
 alignItems:'center',
},
box1:{
  width: 90,
  height:50,
  marginTop:115,
  margin:10,

},

Text1:{
  fontSize:33,
  fontWeight:'bold',

},


box2:{
  marginTop:50,
  width:310,
  height:180,
  margin:15,

},
input1:{
  margin:15,
  borderColor:"blue",
  borderWidth:2,
  borderRadius:15,
  textShadowColor:'grey',
  padding:7,
  backgroundColor:'white',
},

box3:{
  width:185,
  height:40,
  margin:15,
  marginTop:-28,
  backgroundColor:'blue',
  borderRadius:6,
  alignItems:'center',
},

Text2:{
  fontSize:22,
  fontWeight:'600',
  color:'white',

  alignSelf:'center',
  
},

nav:{
    flexDirection:'row',
},
tex:{
    fontWeight:'bold',
    marginLeft:5,
},


box4:{
  backgroundColor:'pink',
  width:40,
  height:40,
  margin:15,

},
lineStyle:{
  flexDirection:'row',
  marginTop:30,
  marginLeft:15,
  marginRight:15,
  alignItem:'center',
 },


box5:{
  marginTop:25,
  width:320,
  height:40,
  margin:15,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
},

subBox1:{

  width:40,
  height:40,
  margin:15,
},

subBox:{
  backgroundColor:'pink',
  width:40,
  height:40,
  margin:15,
},

})