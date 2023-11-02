import { Image, StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE } from "../../constants/colors";
import { FONT_FAMILY_PLAYFAIR } from "../../constants/font";
import { PADDING } from "../../constants/padding";
import Text from "../typography/Text";

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/profile.png")} />
      </View>
      <View>
        <Text style={styles.welcomeBack}>Welcome back 👋</Text>
        <Text style={styles.header} bold>
          Andrew Ainsley
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
});

export default HomeHeader;
