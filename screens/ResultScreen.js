import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



export default function ResultScreen( {navigation} ) {

  
  return (
    <View style={styles.container}>
   
    <Image
      style={styles.logo}
      source={{
        uri: 'https://img.freepik.com/free-vector/flying-slice-pizza-cartoon-vector-illustration-fast-food-concept-isolated-vector-flat-cartoon-style_138676-1934.jpg',
      }}
    />
    <Text>Pizza</Text>
<Text>Calories per 100 gram: 230</Text>
    <Text>Advisable Intake: Once a Week</Text>
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 80,
      height: 120,
    },
  });
