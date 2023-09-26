import React from 'react';
import { ImageBackground, StyleSheet, View, Image, TextInput } from 'react-native';
import Button from '../component/button/ButtonComponent';

export default function LoginScreen() {
  return (
    <ImageBackground style={styles.background} source={{ uri: 'https://picsum.photos/4000/3000' }}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Email'
          textContentType={'emailAddress'}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          textContentType={'password'}
          style={styles.input}
        ></TextInput>
        <Button title='Submit' style={styles.submitButton}></Button>
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
  formContainer: {
    gap: 16,
    width: '100%',
    alignItems: 'center',
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
  input: {
    width: '50%',
  },
  submitButton: {
    backgroundColor: '#42afa8',
  },
});

