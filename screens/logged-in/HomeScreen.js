import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/Button";
import HomeHeaderBar from "../../components/HomeHeaderBar";
import HorizontalTags from "../../components/horizontal-tags/HorizontalTags";
import Card from "../../components/trending/Card";
import List from "../../components/trending/List";
import Text from "../../components/typography/Text";
import { PADDING } from "../../constants/padding";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <HomeHeaderBar title="Trending" />
        <List />
      </View>
      <View>
        <HomeHeaderBar title="Recent Stories" />
        <HorizontalTags style={{ marginTop: PADDING[12] }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: PADDING[16],
    backgroundColor: "white",
    flexGrow: 1,
    height: "100%",
  },
});

export default HomeScreen;
