import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import { BORDER_RADIUS, PADDING } from "../../constants/padding";
import Header from "../typography/Header";
import Text from "../typography/Text";

const ViewPostHeader = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/view-post.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Header size="small">
          Unmasking the Truth: Investigative Report Exposes Widespread Political
          Corruption
        </Header>
      </View>
      <View style={styles.publisherContainer}>
        <Image
          source={require("../../assets/publishers/cnn.png")}
          style={styles.publisherIcon}
        />
        <Text size="small">CNN News</Text>
        <View style={styles.circleDot} />
        <Text size="small" bold style={styles.followingText}>
          Following
        </Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={[styles.textGray]} size="small">
          5 Mins Read
        </Text>
        <View
          style={[
            styles.circleDot,
            {
              backgroundColor: styles.textGray.color,
            },
          ]}
        />
        <Text style={[styles.textGray]} size="small">
          3 days ago
        </Text>
        <View style={styles.statsIconTextContainer}>
          <View style={styles.statsIconText}>
            <Ionicons
              name="eye-outline"
              size={16}
              color={styles.textGray.color}
            />
            <Text size="small" style={[styles.textGray]}>
              24.k
            </Text>
          </View>
          <View style={styles.statsIconText}>
            <Ionicons
              name="chatbubble-outline"
              size={16}
              color={styles.textGray.color}
            />
            <Text style={[styles.textGray]} size="small">
              3.2k comments
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 240,
    width: "100%",
    borderRadius: BORDER_RADIUS[8],
  },
  imageContainer: {
    justifyContent: "center",
    marginBottom: PADDING[12],
  },
  publisherContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
    marginTop: PADDING[6],
  },
  circleDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "black",
  },
  publisherIcon: {
    width: 20,
    height: 20,
  },
  followingText: {
    color: THEME_COLORS.primary,
  },
  textGray: {
    color: COLOR_GREY_SCALE[500],
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[8],
  },
  statsIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[4],
  },
  statsIconTextContainer: {
    marginLeft: PADDING[14],
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[12],
  },
});

export default ViewPostHeader;
