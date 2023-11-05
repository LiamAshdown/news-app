import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE } from "../../constants/colors";
import { PADDING } from "../../constants/padding";
import Text from "../typography/Text";

const CommentContent = ({ canReply = true }) => {
  const navigation = useNavigation();

  const onReply = () => {
    console.log("reply");
    navigation.navigate("Comments");
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.headerTitleContainer}>
          <View>
            <Image source={require("../../assets/comment-avatar.png")} />
          </View>
          <View>
            <Text bold>Sanjuanita Ordonez</Text>
            <Text size="medium" style={styles.timeText}>
              3 days ago
            </Text>
          </View>
        </View>
        <View>
          <Ionicons name="ellipsis-vertical-outline" size={24} />
        </View>
      </View>
      <View>
        <Text>
          This investigative report is a powerful reminder of the importance of
          transparency and accountability in our political system.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.statsContainer}>
          <Ionicons name="heart-outline" size={24} />
          <Text>2.3k</Text>
        </View>
        {canReply && (
          <View>
            <Text onPressHandler={onReply}>Reply</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitleContainer: {
    flexDirection: "row",
    gap: PADDING[12],
  },
  timeText: {
    color: COLOR_GREY_SCALE[500],
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[12],
    marginTop: PADDING[4],
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
  },
});

export default CommentContent;
