import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from "../config/styles";

const AppTextInput = ({ icon, ...otherProps }) => {
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
      <TextInput
        {...otherProps}
        clearButtonMode={"always"}
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text, styles.textInput]}
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
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 10,
  },
  textInput: { flex: 1 },
  icon: {
    marginRight: 5,
  },
});
export default AppTextInput;
