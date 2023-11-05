import { StyleSheet, View } from "react-native";

import Comment from "./Comment";
import { PADDING } from "../../constants/padding";

const Comments = () => {
  const Gapper = () => {
    return <View style={styles.margin} />;
  };

  return (
    <View>
      <Gapper />
      <View style={styles.commentsContainer}>
        <Comment />
        <Comment />
        <Comment />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: 20,
  },
  commentsContainer: {
    flexDirection: "column",
    gap: PADDING[32],
  },
});

export default Comments;
