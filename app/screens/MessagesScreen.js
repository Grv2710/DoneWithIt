import { View, FlatList, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDeleteMsg = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => console.log("clicked")}
            title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDeleteMsg(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image:
                "https://cdn-icons-png.flaticon.com/512/10226/10226381.png",
            },
          ]);
        }}
      />
    </Screen>
  );
};

export default MessagesScreen;
