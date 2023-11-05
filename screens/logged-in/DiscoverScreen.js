import { ScrollView, StyleSheet, View } from "react-native";

import FollowAuthorsPublishersList from "../../components/FollowAuthorsPublishersList";
import HeaderBar from "../../components/HeaderBar";
import List from "../../components/trending/List";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";

const DiscoverScreen = () => {
  const Gapper = () => {
    return <View style={styles.margin} />;
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <HeaderBar title="This Week's Top Stories" />
      </View>
      <Gapper />
      <View style={styles.paddingLeft}>
        <List />
      </View>
      <View style={styles.container}>
        <Gapper />
        <HeaderBar title="Popular Official Publishers" />
        <Gapper />
      </View>
      <View style={styles.paddingLeft}>
        <FollowAuthorsPublishersList />
      </View>
      <View style={styles.container}>
        <Gapper />
        <HeaderBar title="Popular Authors" />
        <Gapper />
      </View>
      <View style={styles.paddingLeft}>
        <FollowAuthorsPublishersList />
      </View>
      <View style={styles.container}>
        <Gapper />
        <HeaderBar title="Recommendations for You" />
        <Gapper />
      </View>
      <View style={styles.paddingLeft}>
        <List />
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

export default DiscoverScreen;
