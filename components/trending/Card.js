import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { PADDING } from "../../constants/padding";
import Header from "../typography/Header";
import Text from "../typography/Text";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View>
          <Image source={require("../../assets/trending-card.png")} />
        </View>
        <View>
          <Header size="xsmall" style={styles.title}>
            Unmasking the Truth: Investigative Report Exposes Widespread
            Political Corruption
          </Header>
        </View>
        <View style={styles.publisherContainer}>
          <Image
            source={require("../../assets/publishers/cnn.png")}
            style={styles.publisherImage}
          />
          <Text size="medium">CNN News</Text>
        </View>
        <View />
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
              3.2k
            </Text>
          </View>
        </View>
        <View style={styles.statsWrapper}>
          <Ionicons name="ellipsis-vertical-outline" size={18} />
          <Ionicons name="share-social-outline" size={18} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    marginRight: PADDING[16],
  },
  infoContainer: {
    gap: PADDING[8],
  },
  title: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
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
});

export default Card;
