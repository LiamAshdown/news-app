import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Touchable,
} from "react-native";

import { BUTTON_COLORS, WHITE } from "../constants/colors";
import { FONT_FAMILY_URBANIST } from "../constants/font";
import { BORDER_RADIUS, PADDING } from "../constants/padding";
import { BODY_FONT_SIZES } from "../constants/typography";
import { DarkenColor } from "../lib/utils";

const Button = ({
  children,
  variant = "",
  size = "xlarge",
  shadow = false,
  onPressHandler = null,
}) => {
  const [onPress, setOnPress] = useState(false);

  const onButtonPress = () => {
    if (onPressHandler) {
      onPressHandler();
    }
  };

  const onButtonPressIn = () => {
    setOnPress(true);
  };

  const onButtonPressOut = () => {
    setOnPress(false);
  };

  const switchOnVariant = () => {
    switch (variant) {
      case "outline-primary": {
        return {
          backgroundColor: BUTTON_COLORS.white,
          borderColor: BUTTON_COLORS.primary,
        };
      }
      case "black": {
        return {
          backgroundColor: BUTTON_COLORS.black,
          borderColor: BUTTON_COLORS.black,
        };
      }
      case "white": {
        return {
          backgroundColor: BUTTON_COLORS.white,
          borderColor: BUTTON_COLORS.white,
        };
      }
      default: {
        return {
          backgroundColor: BUTTON_COLORS.primary,
          borderColor: BUTTON_COLORS.primary,
        };
      }
    }
  };

  const switchOnTextColor = () => {
    switch (variant) {
      case "outline-primary": {
        return {
          color: BUTTON_COLORS.primary,
        };
      }

      case "black": {
        return {
          color: BUTTON_COLORS.white,
        };
      }
      case "white": {
        return {
          color: BUTTON_COLORS.primary,
        };
      }
      default: {
        return {
          color: WHITE,
        };
      }
    }
  };

  const switchOnSize = () => {
    switch (size) {
      case "small": {
        return {
          padding: PADDING[12],
        };
      }
      case "medium": {
        return {
          padding: PADDING[14],
        };
      }
      case "large": {
        return {
          padding: PADDING[16],
        };
      }
      default: {
        return {
          padding: PADDING[18],
        };
      }
    }
  };

  const onShadow = () => {
    // Add border bottom shadow
    if (shadow) {
      switch (variant) {
        case "outline-primary": {
          return {
            borderBottomWidth: 4,
          };
        }
        case "black": {
          return {
            borderBottomWidth: 4,
          };
        }
        case "white": {
          return {
            borderBottomWidth: 4,
          };
        }
        default: {
          if (onPress) {
            return {
              borderBottomWidth: 4,
            };
          }

          return {
            borderBottomWidth: 4,
            borderBottomColor: DarkenColor(BUTTON_COLORS.primary, 10),
          };
        }
      }
    }

    return {};
  };

  return (
    <TouchableOpacity
      onPress={onButtonPress}
      onPressIn={onButtonPressIn}
      onPressOut={onButtonPressOut}
      style={[styles.button, switchOnVariant(), switchOnSize(), onShadow()]}
    >
      <Text style={[styles.text, switchOnTextColor()]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: BORDER_RADIUS[8],
  },
  text: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    fontSize: BODY_FONT_SIZES.xlarge,
    letterSpacing: 0.2,
  },
});

export default Button;
