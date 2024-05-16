import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import {
  BORDER_GREY_COLOR,
  BUTTON_COLORS,
  SURFACE_LIGHT_DARK_LIGHT,
  WHITE,
} from "../constants/colors";
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
  alignIcon = "",
  style,
  loading = false,
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

  const switchOnTextSize = () => {
    switch (size) {
      case "xsmall": {
        return {
          fontSize: BODY_FONT_SIZES.xsmall,
        };
      }
      case "small": {
        return {
          fontSize: BODY_FONT_SIZES.small,
        };
      }
      case "medium": {
        return {
          fontSize: BODY_FONT_SIZES.medium,
        };
      }
      case "large": {
        return {
          fontSize: BODY_FONT_SIZES.large,
        };
      }
      default: {
        return {
          fontSize: BODY_FONT_SIZES.xlarge,
        };
      }
    }
  };

  const switchOnVariant = () => {
    switch (variant) {
      case "outline-primary": {
        return {
          backgroundColor: BUTTON_COLORS.white,
          borderColor: BUTTON_COLORS.primary,
        };
      }
      case "outline-white": {
        return {
          backgroundColor: BUTTON_COLORS.white,
          borderColor: SURFACE_LIGHT_DARK_LIGHT[8],
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
      case "outline-white":
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
      case "xsmall": {
        return {
          padding: PADDING[8],
        };
      }
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
    if (!block) {
      return {
        position: "relative",
      };
    }

    if (rounded) {
      return {
        left: 20,
      };
    }

    return {
      left: 10,
    };
  };

  const switchOnLoading = () => {
    if (loading) {
      return {
        opacity: 0.5,
      };
    }

    return {};
  };

  return (
    <View style={[switchOnBlock(), style]}>
      <TouchableOpacity
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
            switchOnLoading(),
          ]}
        >
          {iconName && alignIcon !== "right" && (
            <Ionicons
              name={iconName}
              color={switchOnTextColor().color}
              style={[styles.icon, switchOnIcon()]}
              size={20}
            />
          )}
          {loading && (
            <ActivityIndicator size="small" color={switchOnTextColor().color} />
          )}
          <Text style={[styles.text, switchOnTextColor(), switchOnTextSize()]}>
            {children}
          </Text>
          {iconName && alignIcon === "right" && (
            <Ionicons
              name={iconName}
              color={switchOnTextColor().color}
              style={[styles.icon, switchOnIcon()]}
              size={20}
            />
          )}
        </View>
      </TouchableOpacity>
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
    alignItems: "center",
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
