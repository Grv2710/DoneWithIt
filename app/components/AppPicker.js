import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name="email"
          size={20}
          color={defaultStyles.colors.medium}
        />
      )}
      <AppText>{placeholder}</AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
  },
  icon: {
    marginRight: 5,
  },
});
export default AppPicker;
