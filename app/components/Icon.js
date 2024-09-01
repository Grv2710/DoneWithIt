import { View, Text } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({
  name = "email",
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) => {
  return (
    <View
      style={{
        backgroundColor,
        height: size,
        width: size,
        borderRadius: size * 0.5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons size={size * 0.5} name={name} color={iconColor} />
    </View>
  );
};

export default Icon;
