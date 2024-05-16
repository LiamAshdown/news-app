import { Image, ScrollView, StyleSheet, View } from "react-native";

import Button from "./Button";
import StoriesList from "./stories/StoriesList";
import Text from "./typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../constants/colors";
import { PADDING } from "../constants/padding";

const UserProfile = ({ user, isOwnProfile = false }) => {
  return (
    <View>
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.headerTitleContainer}>
            <View>
              <Image
                style={styles.avatar}
                source={{
                  uri: user.gravatarUrl,
                }}
              />
            </View>
            <View>
              <Text bold size="xlarge">
                {user.fullName}
              </Text>
              <Text style={styles.handlerText} size="large">
                @{user.username}
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
          <Text size="large">{user.bio}</Text>
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
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
});

export default UserProfile;
