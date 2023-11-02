import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

import { SURFACE_LIGHT_DARK_LIGHT, THEME_COLORS } from "../../constants/colors";
import { PADDING } from "../../constants/padding";

const HomeNotificaton = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="notifications-outline" size={32} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Create a circle with width and height equal
    // and make it a flex container
    width: 50,
    height: 50,
    display: "flex",
    marginRight: PADDING[12],
    alignItems: "center",
    justifyContent: "center",
    borderColor: SURFACE_LIGHT_DARK_LIGHT[8],
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: THEME_COLORS.white,
    borderRadius: 50,
  },
});

export default HomeNotificaton;
