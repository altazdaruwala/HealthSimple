import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import AppLoader from '../src/components/AppLoader';

export default function HomeScreen( {navigation} ) {


  return (
 <TouchableOpacity style={styles.container}
 onPress={() => navigation.navigate("Result")}
 >
    <AppLoader/>
   

    </TouchableOpacity>
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
