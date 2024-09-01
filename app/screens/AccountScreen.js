import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

const AccountScreen = () => {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];
  return (
    <View style={{ backgroundColor: colors.light, flex: 1 }}>
      <View style={styles.container}>
        <ListItem
          title="Gaurav Kumar"
          subTitle="gaurav.kumar@gmail.com"
          image="https://cdn-icons-png.flaticon.com/512/10226/10226381.png"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
export default AccountScreen;
