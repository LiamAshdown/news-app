import { Image, StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import { PADDING } from "../../constants/padding";
import Button from "../Button";
import Text from "../typography/Text";

const NotificationItem = ({
  title,
  time,
  type = "follow",
  leftImageSrc,
  rightImageSrc,
}) => {
  const PostItem = () => {
    return (
      <View>
        <Image style={styles.rightImage} source={rightImageSrc} />
      </View>
    );
  };

  const FollowItem = () => {
    return (
      <View>
        <Button rounded size="xsmall">
          Follow back
        </Button>
      </View>
    );
  };

  const onSwitchType = () => {
    switch (type) {
      case "post":
        return <PostItem />;
      case "follow":
        return <FollowItem />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.leftImage} source={leftImageSrc} />
      </View>
      <View style={styles.header}>
        <Text size="medium" style={styles.title}>
          {title}
        </Text>
        <Text size="small" style={styles.timeText}>
          {time}
        </Text>
      </View>
      {onSwitchType()}
      <View>
        <View style={styles.unreadIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: PADDING[12],
  },
  leftImage: {
    width: PADDING[48],
    height: PADDING[48],
  },
  rightImage: {
    width: 90,
    height: 60,
  },
  title: {
    lineHeight: 18,
  },
  header: {
    flexShrink: 1,
  },
  timeText: {
    color: COLOR_GREY_SCALE[700],
  },
  unreadIcon: {
    width: PADDING[12],
    height: PADDING[12],
    borderRadius: PADDING[8],
    backgroundColor: THEME_COLORS.primary,
  },
});

export default NotificationItem;
