import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

import Text from "./typography/Text";

const Alert = ({ children, type = "success", style = {} }) => {
  const switchOnAlertStyleContainer = (type) => {
    let backgroundColor, borderColor;

    switch (type) {
      case "info":
        backgroundColor = "#d1ecf1";
        borderColor = "#bee5eb";
        break;
      case "warning":
        backgroundColor = "#fff3cd";
        borderColor = "#ffeeba";
        break;
      case "danger":
        backgroundColor = "#f8d7da";
        borderColor = "#f5c6cb";
        break;
      case "success":
        backgroundColor = "#d4edda";
        borderColor = "#c3e6cb";
        break;
      default:
        backgroundColor = "red";
        borderColor = "#d9534f";
        break;
    }

    return {
      backgroundColor,
      padding: 15,
      borderRadius: 4,
      borderWidth: 1,
      borderColor,
    };
  };

  return (
    <>
      <View
        style={[styles.container, switchOnAlertStyleContainer(type), style]}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="alert-circle-outline" size={24} color="black" />
        </View>
        <View style={styles.textContainer}>
          <Text>{children} </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconContainer: {
    alignSelf: "flex-start",
  },
  textContainer: {
    flexShrink: 1,
  },
});

export default Alert;
