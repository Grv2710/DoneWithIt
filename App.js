import { View, Text, StyleSheet } from "react-native";
import React from "react";
import WelcomsScreen from "./app/screens/WelcomsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
export default function App() {
  return (
    <View style={styles.container}>
      <ListingDetailsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
