import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

const ListItem = ({ title, subTitle, image, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          <Image source={{ uri: image }} style={styles.image} />
          <View style={styles.description}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  description: {
    justifyContent: "center",
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "red",
  },
  subTitle: {
    color: colors.light,
  },
  title: {
    fontWeight: "500",
  },
});
export default ListItem;
