import { Image, StyleSheet, View, ViewBase } from "react-native";

import { COLOR_GREY_SCALE, TEXT_GENERAL_LIGHT } from "../../constants/colors";
import { PADDING } from "../../constants/padding";
import Button from "../Button";
import Divider from "../Divider";
import Text from "../typography/Text";

const ViewPostPublisher = () => {
  return (
    <>
      <Divider />
      <View style={styles.container}>
        <View style={styles.publisherContainer}>
          <View style={styles.logoHeader}>
            <View>
              <Image source={require("../../assets/publishers/cnn.png")} />
            </View>
            <View>
              <Text bold>CNN News</Text>
              <Text size="medium" style={styles.followersText}>
                19.2M followers
              </Text>
            </View>
          </View>
          <View>
            <Button variant="outline-white" rounded size="small">
              Following
            </Button>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text size="medium">
            The Cable News Network is a multinational news channel and website
            headquartered in Atlanta, Georgia, U.S.
          </Text>
        </View>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: PADDING[16],
  },
  publisherContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[16],
  },
  followersText: {
    color: COLOR_GREY_SCALE[700],
  },
  descriptionContainer: {
    marginTop: PADDING[12],
  },
});

export default ViewPostPublisher;
