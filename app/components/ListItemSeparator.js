import { View, StyleSheet } from "react-native";
import React from "react";
import colors from "../config/colors";

const ListItemSeparator = () => {
  return <View style={styles.border}></View>;
};

const styles = StyleSheet.create({
  border: {
    backgroundColor: colors.light,
    height: 1,
    marginVertical: 10,
  },
});

export default ListItemSeparator;
