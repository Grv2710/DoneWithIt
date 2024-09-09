import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  placeholder = "Choose Category",
  selectedItem,
  onSelectItem,
}) => {
  const [isVissible, setIsVissible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVissible(!isVissible)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              style={styles.icon}
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
            />
          )}
          <AppText style={styles.textInput}>
            {selection ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVissible} animationType="slide">
        <Screen>
          <Button
            style={{ marginTop: 20 }}
            title="Cancel"
            onPress={() => setIsVissible(!isVissible)}
          />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item);
                  setIsVissible(!isVissible);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    width: "100%",
    backgroundColor: defaultStyles.colors.light,
    marginVertical: 10,
  },
  textInput: {
    flex: 1,
  },
  icon: {
    marginRight: 5,
  },
});
export default AppPicker;
