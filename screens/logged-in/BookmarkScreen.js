import { ScrollView, StyleSheet, View } from "react-native";

import FollowAuthorsPublishersList from "../../components/FollowAuthorsPublishersList";
import HeaderBar from "../../components/HeaderBar";
import HorizontalTags from "../../components/horizontal-tags/HorizontalTags";
import StoriesList from "../../components/stories/StoriesList";
import List from "../../components/trending/List";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";

const BookmarkScreen = () => {
  const Gapper = () => {
    return <View style={styles.margin} />;
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <HorizontalTags />
        <Gapper />
        <StoriesList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  container: {
    paddingHorizontal: CONTAINER_PADDING,
  },
  paddingLeft: {
    paddingLeft: CONTAINER_PADDING,
  },
  margin: {
    marginVertical: PADDING[12],
  },
});

export default BookmarkScreen;
