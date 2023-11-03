import { ScrollView, StyleSheet, View } from "react-native";

import StoriesList from "../../components/stories/StoriesList";
import { THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING } from "../../constants/padding";

const TrendingScreen = () => {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.container}>
        <StoriesList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: THEME_COLORS.white,
  },
  container: {
    padding: CONTAINER_PADDING,
    height: "100%",
  },
});

export default TrendingScreen;
