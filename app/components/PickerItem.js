import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "./AppText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText>{label}</AppText>
    </TouchableOpacity>
  );
};

export default PickerItem;
