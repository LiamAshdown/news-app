import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { View, StyleSheet, Text, Touchable, Pressable } from "react-native";

import { BORDER_GREY_COLOR, BUTTON_COLORS, WHITE } from "../constants/colors";
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
  rounded = false,
  block = false,
  iconName = "",
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
          borderColor: BORDER_GREY_COLOR,
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
          color: BUTTON_COLORS.black,
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
        case "black":
        case "white":
        case "outline-primary": {
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

    if (onPress) {
      return {
        opacity: 0.7,
      };
    }

    return {};
  };

  const switchOnRounded = () => {
    if (rounded) {
      return {
        borderRadius: BORDER_RADIUS[50],
      };
    }

    return {};
  };

  const switchOnBlock = () => {
    if (block) {
      return {
        flex: 1,
      };
    }

    return {};
  };

  const switchOnIcon = () => {
    if (rounded) {
      return {
        left: 20,
      };
    }

    return {
      left: 10,
    };
  };

  return (
    <View style={[switchOnBlock()]}>
      <Pressable
        onPress={onButtonPress}
        onPressIn={onButtonPressIn}
        onPressOut={onButtonPressOut}
      >
        <View
          style={[
            styles.button,
            switchOnVariant(),
            switchOnSize(),
            onShadow(),
            switchOnRounded(),
          ]}
        >
          {iconName && (
            <Ionicons
              name={iconName}
              color={switchOnTextColor().color}
              style={[styles.icon, switchOnIcon()]}
              size={20}
            />
          )}
          <Text style={[styles.text, switchOnTextColor()]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: BORDER_RADIUS[8],
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", // Add this
  },
  text: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    fontSize: BODY_FONT_SIZES.xlarge,
    letterSpacing: 0.2,
    textAlign: "center",
  },
  icon: {
    position: "absolute",
  },
});

export default Button;
