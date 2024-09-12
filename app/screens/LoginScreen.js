import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";

const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logoMobile.jpg")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="abc@xyz.com"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="password"
              secureTextEntry
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <AppButton title="Submit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
