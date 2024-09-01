import { View, Text, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import WelcomsScreen from "./app/screens/WelcomsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
export default function App() {
  return (
    <GestureHandlerRootView>
      {/* <View style={styles.container}>
        <MessagesScreen />
      </View> */}
      <Screen>
        <Icon name="email" size={50} backgroundColor="red" iconColor="white" />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    // padding: 20,
    // paddingTop: 100,
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
