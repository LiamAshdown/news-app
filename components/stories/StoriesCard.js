import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { COLOR_GREY_SCALE } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { PADDING } from "../../constants/padding";
import Menu from "../context-menu/Menu";
import Header from "../typography/Header";
import Text from "../typography/Text";

const StoriesCard = ({ post }) => {
  const navigation = useNavigation();

  const onViewPost = () => {
    navigation.navigate("ViewPost");
  };

  const viewAuthorPublisher = () => {
    navigation.navigate("ViewAuthorPublisher");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onViewPost}>
          <Image
            style={styles.coverImage}
            source={{
              uri: post.coverImageUrl,
            }}
          />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={onViewPost}>
            <Header size="xxsmall" style={styles.title}>
              {post.title}
            </Header>
          </TouchableOpacity>
          <View style={styles.publisherContainer}>
            <Image
              source={require("../../assets/publishers/cnn.png")}
              style={styles.publisherImage}
            />
            <Text size="medium" onPressHandler={viewAuthorPublisher}>
              {post.user.username}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.statsWrapper}>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText} size="small">
              2 hours ago
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <Ionicons name="eye-outline" size={16} />
            <Text style={styles.statsText} size="small">
              24.k
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <Ionicons name="chatbubble-outline" size={16} />
            <Text style={styles.statsText} size="small">
              3.2k comments
            </Text>
          </View>
        </View>
        <View style={styles.statsWrapper}>
          <Ionicons name="share-social-outline" size={18} />
          <Menu
            Trigger={<Ionicons name="ellipsis-vertical-outline" size={18} />}
            options={[
              {
                text: "Save to Bookmark",
                iconName: "bookmark-outline",
                value: "bookmark",
              },
              {
                text: "Hide This",
                iconName: "eye-off-outline",
                value: "hide",
              },
              {
                text: "Report This",
                iconName: "alert-circle-outline",
                value: "report",
              },
              {
                text: "Send Feedback",
                iconName: "chatbubble-ellipses-outline",
                value: "feedback",
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row-reverse",
  },
  container: {
    gap: PADDING[8],
  },
  infoContainer: {
    gap: PADDING[8],
    flex: 1,
  },
  title: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    flexShrink: 1,
  },
  publisherContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
  },
  publisherImage: {
    width: 24,
    height: 24,
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: PADDING[8],
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
  },
  statsText: {
    color: COLOR_GREY_SCALE[500],
  },
  coverImage: {
    width: 120,
    height: 101,
  },
});

export default StoriesCard;
