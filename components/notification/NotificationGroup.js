import { StyleSheet, View, ViewBase } from "react-native";

import NotificationItem from "./NotificationItem";
import { COLOR_GREY_SCALE } from "../../constants/colors";
import { PADDING } from "../../constants/padding";
import Text from "../typography/Text";

const NotificationGroup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.text} size="large">
            Today
          </Text>
        </View>
        <View style={styles.horizontalLine} />
      </View>
      <NotificationItem
        title="CNN News published a new story"
        time="09:41 AM"
        leftImageSrc={require("../../assets/publishers/cnn.png")}
        rightImageSrc={require("../../assets/new-story.png")}
        type="post"
      />
      <NotificationItem
        title="Rayford Chenail started following you"
        time="08:47 AM"
        imageSrc={require("../../assets/publishers/cnn.png")}
        type="follow"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: PADDING[12],
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
  },
  text: {
    color: COLOR_GREY_SCALE[500],
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: COLOR_GREY_SCALE[500],
    flex: 1,
  },
});

export default NotificationGroup;
