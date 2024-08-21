import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <View>
        <AppText>onixevo27@gmail.com</AppText>
        <AppText>5 Listing</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
export default ListItem;
