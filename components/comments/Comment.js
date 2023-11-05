import { StyleSheet, View } from "react-native";

import CommentContent from "./CommentContent";
import ReplyComment from "./ReplyComment";
import { PADDING } from "../../constants/padding";

const Comment = () => {
  return (
    <View>
      <CommentContent />
      <View style={styles.replyContainer}>
        <ReplyComment />
        <ReplyComment />
        <ReplyComment />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  replyContainer: {
    marginLeft: PADDING[48],
    marginTop: PADDING[16],
    gap: PADDING[16],
  },
});

export default Comment;
