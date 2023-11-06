import { Image, ScrollView, StyleSheet, View } from "react-native";

import Button from "../../components/Button";
import UserProfile from "../../components/UserProfile";
import FloatingButton from "../../components/form/FloatingButton";
import StoriesList from "../../components/stories/StoriesList";
import Text from "../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";

const ProfileScreen = ({ navigation }) => {
  const onNewStory = () => {
    navigation.navigate("CreatePost");
  };

  return (
    <>
      <ScrollView
        style={styles.background}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <UserProfile isOwnProfile />
      </ScrollView>
      <FloatingButton onPressHandler={onNewStory} />
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    padding: CONTAINER_PADDING,
  },
  background: {
    backgroundColor: THEME_COLORS.white,
  },
});

export default ProfileScreen;
