import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/Button";
import HomeHeaderBar from "../../components/HomeHeaderBar";
import HorizontalTags from "../../components/horizontal-tags/HorizontalTags";
import StoriesList from "../../components/stories/StoriesList";
import Card from "../../components/trending/Card";
import List from "../../components/trending/List";
import Text from "../../components/typography/Text";
import { PADDING } from "../../constants/padding";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={{ padding: PADDING[16] }}>
          <HomeHeaderBar
            title="Trending"
            navigation={navigation}
            goTo="Trending"
          />
        </View>
        <View style={{ paddingLeft: PADDING[16] }}>
          <List />
        </View>
        <View style={{ padding: PADDING[16] }}>
          <HomeHeaderBar
            title="Recent Stories"
            navigation={navigation}
            goTo="RecentStories"
          />
          <HorizontalTags style={{ marginTop: PADDING[12] }} />
          <View style={{ marginTop: PADDING[12] }}>
            <StoriesList />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    height: "100%",
  },
});

export default HomeScreen;
