import { ScrollView, StyleSheet, View } from "react-native";

import FollowAuthorsPublishersItem from "./FollowAuthorsPublishersItem";
import { PADDING } from "../constants/padding";

const FollowAuthorsPublishersList = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <FollowAuthorsPublishersItem />
        <FollowAuthorsPublishersItem />
        <FollowAuthorsPublishersItem />
        <FollowAuthorsPublishersItem />
        <FollowAuthorsPublishersItem />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: PADDING[12],
  },
});

export default FollowAuthorsPublishersList;
