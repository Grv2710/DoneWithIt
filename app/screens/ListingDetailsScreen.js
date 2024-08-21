import { View, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Chair for sale</AppText>
        <AppText style={styles.price}>$200</AppText>
        <ListItem
          title="Gaurav Kumar"
          subTitle="5 listing"
          image="https://cdn-icons-png.flaticon.com/512/10226/10226381.png"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: colors.white,
  },
  detailContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  price: {
    color: colors.secondary,
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});
export default ListingDetailsScreen;
