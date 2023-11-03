import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TouchableOpacity } from "react-native";

import { SURFACE_LIGHT_DARK_LIGHT, THEME_COLORS } from "../../constants/colors";
import { PADDING } from "../../constants/padding";

const HomeNotificaton = ({ navigation }) => {
  const onNavigate = () => {
    navigation.navigate("Notification");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate}>
      <Ionicons name="notifications-outline" size={32} color="black" />
    </TouchableOpacity>
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
