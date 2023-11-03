import { ScrollView, StyleSheet, View } from "react-native";

import HorizontalTags from "../../components/horizontal-tags/HorizontalTags";
import StoriesList from "../../components/stories/StoriesList";
import { THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";

const RecentStoriesScreen = () => {
  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.container}>
        <HorizontalTags style={{ marginBottom: PADDING[12] }} />
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

export default RecentStoriesScreen;
