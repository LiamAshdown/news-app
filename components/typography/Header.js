import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { FONT_FAMILY_PLAYFAIR } from "../../constants/font";
import { HEADER_FONT_SIZES } from "../../constants/typography";

const Header = ({ children, size, style, onPressHandler }) => {
  const onSwitchSize = () => {
    switch (size) {
      case "xlarge": {
        return {
          fontSize: HEADER_FONT_SIZES.h1,
        };
      }
      case "large": {
        return {
          fontSize: HEADER_FONT_SIZES.h2,
        };
      }
      case "medium": {
        return {
          fontSize: HEADER_FONT_SIZES.h3,
        };
      }
      case "small": {
        return {
          fontSize: HEADER_FONT_SIZES.h4,
        };
      }
      case "xsmall": {
        return {
          fontSize: HEADER_FONT_SIZES.h5,
        };
      }
      case "xxsmall": {
        return {
          fontSize: HEADER_FONT_SIZES.h6,
        };
      }
      default: {
        return {
          fontSize: HEADER_FONT_SIZES.h1,
        };
      }
    }
  };

  const Wrapper = ({ children }) => {
    if (onPressHandler) {
      return (
        <TouchableOpacity onPress={onPressHandler}>{children}</TouchableOpacity>
      );
    }

    return children;
  };

  return (
    <Wrapper>
      <Text style={[styles.header, style, onSwitchSize()]}>{children}</Text>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: FONT_FAMILY_PLAYFAIR.semibold,
    fontStyle: "normal",
    color: "#000000",
  },
});

export default Header;
