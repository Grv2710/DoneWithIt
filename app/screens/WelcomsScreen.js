import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppButton from "../components/AppButton";

export default function WelcomsScreen() {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/bgMobile.jpg")}
      blurRadius={10}
    >
      <View style={styles.logoAndTagLine}>
        <Image
          style={styles.logo}
          source={require("../assets/logoMobile.jpg")}
        />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => console.log("login button clicked")}
        />
        <AppButton
          title="Register Now"
          onPress={() => console.log("registration button clicked")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoAndTagLine: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginBottom: 10,
  },
  tagLine: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});
