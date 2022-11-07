import React, { useRef, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/loading.json')}
      />
      <View style={styles.buttonContainer}>
        <Text> Your food is now being analyzed!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    zIndex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});



