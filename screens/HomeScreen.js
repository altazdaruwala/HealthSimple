import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../src/components/Buttons';
import AppLoader from '../src/components/AppLoader';

export default function HomeScreen( {navigation} ) {

    
  return (
  
    <View style={styles.container}>
        <Button title="Login"
        onPress={() => navigation.navigate("Camera")}
        />
    </View>

   
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
   
  },

  camera: {
    flex: 1,
    borderRadius: 20,

  }
});
