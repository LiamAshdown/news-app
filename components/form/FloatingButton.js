import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

import { THEME_COLORS } from "../../constants/colors";

const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => console.log("Floating button pressed")}
      >
        <Text style={styles.buttonText}>
          <Ionicons name="pencil" size={24} color="white" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  floatingButton: {
    backgroundColor: THEME_COLORS.primary,
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    right: 10,
    bottom: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
});

export default FloatingButton;
