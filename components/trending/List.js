import { ScrollView, StyleSheet, View, FlatList } from "react-native";

import Card from "./Card";
import { PADDING } from "../../constants/padding";

const List = () => {
  return (
    <FlatList
      data={[{ key: "a" }, { key: "b" }]}
      renderItem={({ item }) => <Card />}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {},
});

export default List;
