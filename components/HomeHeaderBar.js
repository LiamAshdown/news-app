import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

import Header from "./typography/Header";
import Text from "./typography/Text";
import { THEME_COLORS } from "../constants/colors";
import { FONT_FAMILY_URBANIST } from "../constants/font";
import { PADDING } from "../constants/padding";

const HomeHeaderBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Header size="xsmall" style={styles.header}>
          {title}
        </Header>
      </View>
      <View style={styles.viewAllContainer}>
        <Text style={styles.viewAllText}>View All</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={THEME_COLORS.primary}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: PADDING[16],
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
  },
  viewAllContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAllText: {
    color: THEME_COLORS.primary,
    fontFamily: FONT_FAMILY_URBANIST.semibold,
  },
});

export default HomeHeaderBar;
