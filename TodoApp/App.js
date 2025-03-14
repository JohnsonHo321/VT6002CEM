import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './HomeScreen';

const App = () => {

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate(HomeScreen);  
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    margin: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
  },
  titleText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
  },
  buttonLogin: {
    width: "80%",
    height: 50,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#008080",
  }
});

export default App;
