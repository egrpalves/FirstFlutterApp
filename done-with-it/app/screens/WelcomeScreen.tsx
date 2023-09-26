import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import Button from '../component/button/ButtonComponent';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <ImageBackground style={styles.background} source={{ uri: 'https://picsum.photos/4000/3000' }}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title='Login'
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        ></Button>
        <Button title='Register' style={styles.registerButton}></Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#42afa8',
  },
  registerButton: {
    backgroundColor: '#4ecdc4',
  },
  logoContainer: {
    position: 'absolute',
    top: 150,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 150,
  },
});

