import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
export default function Login() {
  return (
    <View>
      <Image
        source={require("../assets/images/login.jpeg")}
        style={{ width: "100%", height: 520 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontFamily: "outfit-regular",
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 10,
          }}
        >
          AITravel Planner is an AI-powered travel app that helps you plan
          personalized trips effortlessly. Create custom itineraries, manage
          bookings, and discover unique destinations and activities tailored to
          your preferences.
        </Text>
        <View style={styles.buttom}>
          <Ionicons name="logo-google" size={28} color={Colors.WHITE} />

          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontSize: 15,
              fontFamily: "outfit-bold",
            }}
          >
            Sing In With Google
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    padding: 25,
  },
  buttom: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
