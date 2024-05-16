import { StyleSheet, View } from "react-native";

import Button from "../../../components/Button";
import Success from "../../../components/svg/Success";
import Header from "../../../components/typography/Header";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";

const SuccessScreen = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("LoggedIn", {
      screen: "HomeScreen",
    });
  };

  return (
    <View style={{ backgroundColor: THEME_COLORS.white, flexGrow: 1 }}>
      <View style={styles.container}>
        <View>
          <Success />
        </View>
        <View>
          <Header style={styles.header}>You're All Set!</Header>
          <Text style={styles.text}>
            Start exploring, discovering, and engaging with the news.
          </Text>
        </View>
      </View>
      <View style={styles.continueButton}>
        <Button rounded size="medium" onPressHandler={onContinue}>
          Let's Go
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLOR_GREY_SCALE[700],
    textAlign: "center",
  },
  header: {
    textAlign: "center",
  },
  container: {
    padding: PADDING[24],
    flexGrow: 1,
    paddingTop: "40%",
    alignItems: "center",
  },
  continueButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: THEME_COLORS.white,
    borderTopWidth: 1,
    borderColor: COLOR_GREY_SCALE[300],
    borderStyle: "solid",
    paddingVertical: PADDING[16],
    paddingHorizontal: PADDING[24],
  },
});

export default SuccessScreen;
