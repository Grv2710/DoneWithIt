import { View, TextInput } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AppTextInput = () => {
  return (
    <View>
      <MaterialCommunityIcons name="email" size={20} />
      <TextInput />
    </View>
  );
};

export default AppTextInput;
