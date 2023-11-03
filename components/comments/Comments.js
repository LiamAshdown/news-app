import { View } from "react-native";

import TotalCommentsBar from "./TotalCommentsBar";

const Comments = () => {
  return (
    <View>
      <TotalCommentsBar totalComments={5} />
    </View>
  );
};

export default Comments;
