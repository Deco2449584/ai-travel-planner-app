import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { TextInput } from "react-native";
export default function SignIn() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
        }}
      >
        Let's Sign You In
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-regular",
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-regular",
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        You've been missed!
      </Text>
      <View>
        <Text>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Email"></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },
});
