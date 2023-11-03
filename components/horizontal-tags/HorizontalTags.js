import { ScrollView, StyleSheet } from "react-native";

import Item from "./Item";
import Button from "../Button";

const HorizontalTags = ({ style }) => {
  return (
    <ScrollView
      horizontal
      style={style}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.recentStoriesContainer}
    >
      <Item selected>All{"    "}</Item>
      <Item>Politics</Item>
      <Item>Technology</Item>
      <Item>Business</Item>
      <Item>Business</Item>
      <Item>Business</Item>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recentStoriesContainer: {},
});

export default HorizontalTags;
