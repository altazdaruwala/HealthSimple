import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from '../src/components/Buttons';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '../src/aws-exports';
Amplify.configure(awsconfig);

export default function CameraScreen({navigation}) {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [food, setFood] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

useEffect(() => {
(async () => {
  MediaLibrary.requestPermissionsAsync();
  const cameraStatus = await Camera.requestCameraPermissionsAsync();
  setHasCameraPermission(cameraStatus.status === 'granted' );
})();
}, [])

const takePicture = async() => {
  if(cameraRef) {
    try{
      const data = await cameraRef.current.takePictureAsync();
      console.log(data);
      setImage(data.uri);
    } catch(e){
      console.log(e);  
    }
  }
}

/*const saveImage = async() => {
  if(image){
    try {
      await MediaLibrary.createAssetAsync(image);
      navigation.navigate("Loading");
      setFood(image);
      setImage(null);
    } catch (e) {
      console.log(error)
    }
  }
}*/
const saveImage = async() => {
  if(image){
    try {
      uploadImage(image);
      console.log(image.uri)
      await MediaLibrary.createAssetAsync(image);
      navigation.navigate("Loading");
      setFood(image);
      //setImage(null);
    } catch (e) {
      console.log(error)
    }
  }
}

const fetchImageUri = async(uri) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
}  

const uploadImage = async (file) => {
  const img = await fetchImageUri(file)
  return Storage.put('Food-image'+Math.random()+'.jpg',img,{ 
    level: 'public',
    contentType: file.type,
    progressCallback(uploadProgress){
      console.log("PROGRESS=======" ,uploadProgress.loaded + '/' + uploadProgress.total)
    } 
  })
  .then((res)=> {
    Storage.get(res.key)
    .then((result)=> {
      console.log ("Result URL >>>>>",result)
    })
    .catch(e=> console.log(e))
  })
}


  if(hasCameraPermission === 'false'){
    return <Text>No access to camera.</Text>
  }

  return (
    <View style={styles.container}>
      {!image ? 
      <Camera 
      style = {styles.camera}
      type = {type}
      flashMode = {flash}
      ref = {cameraRef}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 30,
        }}>

    <Button icon={'retweet'} color={'#f1f1f1'} onPress={() => {
      setType(type === CameraType.back ? CameraType.front : CameraType.back)
    }} />
    <Button icon={'flash'}
    color = {flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
    onPress={() => {
      setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)
    }} />


        </View>
        </ Camera>

      :
        <Image source={{uri: image}} style={styles.camera}/>
      }
      
      <View>

        {image ?
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 50,

        }
        }>
          <Button title={'Retake'} icon = "retweet" onPress={() => setImage(null)}/>
          <Button title={'Analyze Food'} icon = "check" onPress={saveImage} />
        </View>
        :
        <Button title={'Capture Food'} icon = "camera" onPress={takePicture} />
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    paddingBottom: 20,
   
  },

  camera: {
    flex: 1,
    borderRadius: 20,

  }
});
