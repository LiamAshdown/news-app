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
      <View>
        <Image source={require("../../assets/trending-card.png")} />
      </View>
      <View>
        <Header size="xsmall" style={styles.title}>
          Unmasking the Truth: Investigative Report Exposes Widespread Political
          Corruption
        </Header>
      </View>
      <View style={styles.publisherContainer}>
        <Image
          source={require("../../assets/publishers/cnn.png")}
          style={styles.publisherImage}
        />
        <Text size="medium">CNN News</Text>
      </View>
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
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    gap: PADDING[8],
    marginRight: PADDING[16],
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
