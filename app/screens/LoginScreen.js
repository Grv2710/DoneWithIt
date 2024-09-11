import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logoMobile.jpg")} />
      <AppTextInput
        icon="email"
        placeholder="abc@xyz.com"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        onChangeText={(text) => setemail(text)}
      />
      <AppTextInput
        icon="lock"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="password"
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setpassword(text)}
      />
      <AppButton
        title="Submit"
        onPress={() => {
          if (email && password) {
            console.log("login data : ", email, " & ", password);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
