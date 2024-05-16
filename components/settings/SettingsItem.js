import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { PADDING } from "../../constants/padding";
import Text from "../typography/Text";

const SettingsItem = ({
  text,
  iconName,
  navigateTo = null,
  color = "black",
  showIcon = true,
}) => {
  const onPressHandler = () => {
    if (navigateTo) {
      navigateTo();
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
      <View style={styles.textContainer}>
        <Ionicons name={iconName} size={24} color={color} />
        <Text bold color={color}>
          {text}
        </Text>
      </View>
      {showIcon && (
        <View>
          <Ionicons name="chevron-forward-outline" size={24} color={color} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[16],
  },
});

export default SettingsItem;
