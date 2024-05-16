import { StyleSheet, View } from "react-native";

import StoriesCard from "./StoriesCard";
import { PADDING } from "../../constants/padding";

const StoriesList = ({ posts = [] }) => {
  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <StoriesCard key={post.id} post={post} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: PADDING[16],
  },
});

export default StoriesList;
