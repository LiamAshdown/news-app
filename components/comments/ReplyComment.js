import { StyleSheet, View } from "react-native";

import CommentContent from "./CommentContent";

const ReplyComment = () => {
  return (
    <View>
      <CommentContent canReply={false} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReplyComment;
