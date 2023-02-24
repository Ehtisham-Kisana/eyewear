import React, { useEffect, useState, useRef } from "react";
import { Alert, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Camera,  CameraType,  requestCameraPermissionsAsync, getCameraPermissionsAsync} from "expo-camera";
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default () => {
  
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState("off");
  const [pictureUri, setPictureUri] = useState("");
  const cameraRef = useRef();

  useEffect(() => {
    requestPermissions();
  }, []);

  
  const requestPermissions = async () => {
    await requestCameraPermissionsAsync();
    
  };
  const getPermissions = async () => {
    const cameraPermission = await getCameraPermissionsAsync();
    return cameraPermission.granted;
  };

    const switchFlashMode = () =>
    setFlashMode(flashMode === "off" ? "on" : "off");


  const switchType = () =>
    setType(type === CameraType.back ? CameraType.front : CameraType.back);


  const takePicture = async () => {
    const { uri, width, height } = await cameraRef?.current.takePictureAsync();
    setPictureUri(uri);
  };
   


  if (!getPermissions()) {
    return Alert.alert(
      "Permissions Required!",
      "You need to provide the permissions to access the camera",
      [{ text: "Got it" }]
    );
  }

  return (
    <View style={styles.container}>
      
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        flashMode={flashMode}
      >
    
        <View style={styles.addContainer}>
         
        </View>

        <View style={styles.controlsContainer}>
          <MaterialCommunityIcons name="camera-flip-outline" size={32} color="white" onPress={switchType} />
          <TouchableOpacity
            style={styles.takePictureButton}
            onPress={takePicture}
          />
                  
                 
         <Ionicons name={flashMode === "off" ? "flash-off-outline" : "flash"}  size={32} color="white" onPress={switchFlashMode} />
       

        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  addContainer: {
    backgroundColor:'black',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    left: 0,
    position: "absolute",
    padding:12,
    right: 0,
    opacity:0.7,

  },

  controlsContainer: {
    backgroundColor:'#f2e3c6',
    alignItems: "center",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    left: 0,
    position: "absolute",
    right: 0,
   
  },
  takePictureButton: {
   
    borderRadius: 35,
    height: 70,
    marginVertical: 10,
    borderWidth:6,
    borderColor:"#F9813A",
    width: 70,
   
  },
});