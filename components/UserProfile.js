import { Image, ScrollView, StyleSheet, View } from "react-native";

import Button from "./Button";
import StoriesList from "./stories/StoriesList";
import Text from "./typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../constants/colors";
import { PADDING } from "../constants/padding";

const UserProfile = ({ isOwnProfile = false }) => {
  return (
    <View>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.headerTitleContainer}>
            <View>
              <Image source={require("../assets/publishers/cnn.png")} />
            </View>
            <View>
              <Text bold size="xlarge">
                BBC News
              </Text>
              <Text style={styles.handlerText} size="large">
                @bbcnews
              </Text>
            </View>
          </View>
          <View>
            {!isOwnProfile && (
              <Button rounded size="small">
                Follow
              </Button>
            )}
            {isOwnProfile && (
              <Button rounded size="small" variant="white">
                Edit Profile
              </Button>
            )}
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text size="large">
            BBC News is an operational business division of the British
            Broadcasting Corporation.
          </Text>
          <Text style={styles.websiteText} size="medium">
            www.bbc.com/news
          </Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <View style={[styles.statsWrapper, styles.statsBorder]}>
          <Text bold>20,458</Text>
          <Text size="medium" style={styles.statsText}>
            Stories
          </Text>
        </View>
        <View style={[styles.statsWrapper, styles.statsBorder]}>
          <Text bold>26.7M</Text>
          <Text size="medium" style={styles.statsText}>
            Followers
          </Text>
        </View>
        <View style={styles.statsWrapper}>
          <Text bold>7</Text>
          <Text size="medium" style={styles.statsText}>
            Followers
          </Text>
        </View>
      </View>
      <View style={{ marginTop: PADDING[16] }}>
        <StoriesList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: PADDING[14],
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[16],
  },
  websiteText: {
    color: COLOR_GREY_SCALE[500],
  },
  handlerText: {
    color: COLOR_GREY_SCALE[500],
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: PADDING[8],
    borderBottomColor: COLOR_GREY_SCALE[300],
    borderBottomWidth: 1,
    paddingBottom: PADDING[8],
    marginTop: PADDING[16],
  },
  statsText: {
    color: COLOR_GREY_SCALE[700],
  },
  statsWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "33%",
  },
  statsBorder: {
    borderRightColor: COLOR_GREY_SCALE[300],
    borderRightWidth: 1,
    paddingRight: PADDING[8],
  },
});

export default UserProfile;
