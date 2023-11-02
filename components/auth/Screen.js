import { StyleSheet, View, ScrollView } from "react-native";

import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import { PADDING } from "../../constants/padding";
import Button from "../Button";

const Screen = ({ children, continueText = "", onContinueHandler = null }) => {
  return (
    <View style={{ backgroundColor: THEME_COLORS.white, flexGrow: 1 }}>
      <ScrollView>
        <View style={styles.container}>{children}</View>
      </ScrollView>
      <View style={styles.continueButton}>
        <Button rounded size="medium" onPressHandler={onContinueHandler}>
          {continueText}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: PADDING[24],
    justifyContent: "space-between",
    flexGrow: 1,
    paddingBottom: PADDING[32],
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

export default Screen;
