import { StyleSheet, View } from "react-native";

import StoriesCard from "./StoriesCard";
import { PADDING } from "../../constants/padding";

const StoriesList = () => {
  return (
    <View style={styles.container}>
      <StoriesCard />
      <StoriesCard />
      <StoriesCard />
      <StoriesCard />
      <StoriesCard />
      <StoriesCard />
      <StoriesCard />
      <StoriesCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: PADDING[16],
  },
});

export default StoriesList;
