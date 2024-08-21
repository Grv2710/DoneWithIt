import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    padding: Constants.statusBarHeight,
  },
});
export default Screen;
