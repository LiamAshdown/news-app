import { ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/Button";
import HeaderBar from "../../components/HeaderBar";
import HorizontalTags from "../../components/horizontal-tags/HorizontalTags";
import StoriesList from "../../components/stories/StoriesList";
import Card from "../../components/trending/Card";
import List from "../../components/trending/List";
import Text from "../../components/typography/Text";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={{ padding: CONTAINER_PADDING }}>
          <HeaderBar title="Trending" navigation={navigation} goTo="Trending" />
        </View>
        <View style={{ paddingLeft: CONTAINER_PADDING }}>
          <List />
        </View>
        <View style={{ padding: CONTAINER_PADDING }}>
          <HeaderBar
            title="Recent Stories"
            navigation={navigation}
            goTo="RecentStories"
          />
          <HorizontalTags style={{ marginTop: CONTAINER_PADDING }} />
          <View style={{ marginTop: CONTAINER_PADDING }}>
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
