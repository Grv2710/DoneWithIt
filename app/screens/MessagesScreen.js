import { View, FlatList, Text } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: "https://cdn-icons-png.flaticon.com/512/10226/10226381.png",
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: "https://cdn-icons-png.flaticon.com/512/10226/10226381.png",
  },
];
const MessagesScreen = () => {
  return (
    <Screen>
      <View>
        <FlatList
          data={messages}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => console.log("clicked")}
              title={item.title}
              subTitle={item.description}
              image={item.image}
              renderRightActions={ListItemDeleteAction}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </Screen>
  );
};

export default MessagesScreen;
