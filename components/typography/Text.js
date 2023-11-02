import { View, Text as NativeText, StyleSheet } from "react-native";

import { COLOR_GREY_SCALE } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { BODY_FONT_SIZES } from "../../constants/typography";

const Text = ({ children, size = "xlarge" }) => {
  const switchOnSize = () => {
    switch (size) {
      case "xlarge": {
        return {
          fontSize: BODY_FONT_SIZES.xlarge,
        };
      }
      case "large": {
        return {
          fontSize: BODY_FONT_SIZES.large,
        };
      }
      case "medium": {
        return {
          fontSize: BODY_FONT_SIZES.medium,
        };
      }
      case "small": {
        return {
          fontSize: BODY_FONT_SIZES.small,
        };
      }
      case "xsmall": {
        return {
          fontSize: BODY_FONT_SIZES.xsmall,
        };
      }
    }
  };

  return (
    <View>
      <NativeText style={[styles.text, switchOnSize()]}>{children}</NativeText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY_URBANIST.regular,
    fontStyle: "normal",
    color: COLOR_GREY_SCALE[700],
    letterSpacing: 0.2,
    lineHeight: 28,
  },
});

export default Text;
