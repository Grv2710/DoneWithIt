import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "T1",
    price: 200,
    image: "https://cdn-icons-png.flaticon.com/512/10226/10226381.png",
  },
  {
    id: 2,
    title: "T2",
    price: 300,
    image: "https://cdn-icons-png.flaticon.com/512/10226/10226381.png",
  },
];
const ListingsScreen = () => {
  return (
    <View style={{ backgroundColor: colors.light, padding: 20, flex: 1 }}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </View>
  );
};

export default ListingsScreen;
