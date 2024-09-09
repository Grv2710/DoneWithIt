import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          name="email"
          size={20}
          color={colors.medium}
        />
      )}
      <TextInput
        {...otherProps}
        clearButtonMode={"always"}
        placeholderTextColor={colors.medium}
        style={[styles.textInput, defaultStyles.text]}
      />
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
    backgroundColor: colors.light,
    marginVertical: 10,
  },
  textInput: {
    width: "100%",
    color: colors.dark,
  },
  icon: {
    marginRight: 5,
  },
});
export default AppTextInput;
