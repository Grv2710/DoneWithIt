import { View, Text } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";

const ListItemDeleteAction = () => {
  return (
    <View style={{ backgroundColor: "red", width: 70 }}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={24}
        color="White"
      />
    </View>
  );
};

export default ListItemDeleteAction;
