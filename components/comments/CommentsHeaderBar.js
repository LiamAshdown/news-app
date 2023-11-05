import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { THEME_COLORS } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import Header from "../typography/Header";
import Text from "../typography/Text";

const CommentsHeaderBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Header size="xsmall" style={styles.header}>
          {title}
        </Header>
      </View>
      <TouchableOpacity style={styles.viewAllContainer}>
        <Text size="medium" style={styles.viewAllText}>
          View All
        </Text>
        <Ionicons
          name="chevron-forward-outline"
          size={24}
          color={THEME_COLORS.primary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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

export default CommentsHeaderBar;
