import { Image, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import { COLOR_GREY_SCALE } from "../../constants/colors";
import { FONT_FAMILY_PLAYFAIR } from "../../constants/font";
import { PADDING } from "../../constants/padding";
import { selectUser } from "../../store/auth/reducer";
import Text from "../typography/Text";

const HomeHeader = () => {
  const currentUser = useSelector(selectUser);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.avatar}
          source={{
            uri: currentUser.gravatarUrl,
          }}
        />
      </View>
      <View>
        <Text style={styles.welcomeBack}>Welcome back 👋</Text>
        <Text style={styles.header} bold>
          {currentUser.fullName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: PADDING[12],
    gap: PADDING[12],
  },
  welcomeBack: {
    color: COLOR_GREY_SCALE[700],
  },
  header: {
    fontFamily: FONT_FAMILY_PLAYFAIR.bold,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 50,
  },
});

export default HomeHeader;
