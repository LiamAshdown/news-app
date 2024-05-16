import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import Feedback from "./Feedback";
import { FORM_COLORS, SURFACE_LIGHT_DARK_LIGHT } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { BORDER_RADIUS, PADDING } from "../../constants/padding";
import { BODY_FONT_SIZES } from "../../constants/typography";
import Text from "../typography/Text";

const Input = ({
  iconName = null,
  feedback = null,
  disable = false,
  secureTextEntry = false,
  multiline = false,
  style,
  keyboardType = "default",
  placeholder = "",
  label = "",
  onChange = null,
  name = "",
  helpText = "",
  value = "",
  onSubmitEditing = null,
}) => {
  const [onFocus, setOnFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useState(() => {
    if (multiline && secureTextEntry) {
      console.warn(
        "Input: multiline and secureTextEntry cannot be used together",
      );
    }
  }, []);

  const switchFontWeightIfNotEmpty = () => {
    if (value.length > 0 || disable) {
      return FONT_FAMILY_URBANIST.semibold;
    } else {
      return FONT_FAMILY_URBANIST.regular;
    }
  };

  const switchOnFocus = () => {
    if (onFocus && !disable) {
      return styles.focus;
    } else {
      return {};
    }
  };

  const switchOnMultiLine = () => {
    // If there's an icon then fake padding top to center the text
    if (multiline) {
      const multiLineStyle = {
        height: 200,
      };

      if (iconName) {
        multiLineStyle.paddingTop = 20;
      }

      return multiLineStyle;
    }

    return {};
  };

  const switchIconOnFocusAndIfNotEmptyOrDisableColor = () => {
    if (disable) {
      return FORM_COLORS.input.textDisable;
    }

    if (onFocus) {
      return FORM_COLORS.input.focus;
    }

    if (value.length > 0) {
      return FORM_COLORS.input.text;
    }

    return FORM_COLORS.input.placeholder;
  };

  const switchOnDisable = () => {
    if (disable) {
      return styles.disable;
    } else {
      return {};
    }
  };

  const switchInputOnDisable = () => {
    if (disable) {
      return {
        color: FORM_COLORS.input.textDisable,
      };
    } else {
      return {
        color: FORM_COLORS.input.text,
      };
    }
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={styles.label} bold>
          {label}
        </Text>
      )}
      <View style={[styles.wrapper, switchOnFocus(), switchOnDisable()]}>
        <View style={styles.textIcon}>
          {iconName && (
            <Ionicons
              name={iconName}
              color={switchIconOnFocusAndIfNotEmptyOrDisableColor()}
              style={styles.icon}
              size={20}
            />
          )}
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={FORM_COLORS.input.placeholder}
            value={value}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            multiline={multiline}
            onSubmitEditing={onSubmitEditing}
            onChange={(event) => {
              if (onChange) {
                if (name) {
                  onChange(name, event.nativeEvent.text);
                } else {
                  onChange(event.nativeEvent.text);
                }
              }
            }}
            style={[
              styles.input,
              {
                fontFamily: switchFontWeightIfNotEmpty(),
              },
              switchInputOnDisable(),
              switchOnMultiLine(),
            ]}
            secureTextEntry={secureTextEntry && !showPassword}
            editable={!disable}
            keyboardType={keyboardType}
          />
        </View>
        {secureTextEntry && (
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color={switchIconOnFocusAndIfNotEmptyOrDisableColor()}
            style={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
      {helpText && (
        <Text style={styles.helpText} size="mediun">
          {helpText}
        </Text>
      )}
      {feedback && (
        <Feedback variant={feedback.type}>{feedback.message}</Feedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Full width
    width: "100%",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: BORDER_RADIUS[12],
    borderWidth: 1,
    paddingTop: PADDING[18],
    paddingBottom: PADDING[18],
    paddingLeft: PADDING[20],
    paddingRight: PADDING[20],
    borderColor: SURFACE_LIGHT_DARK_LIGHT[3],
    backgroundColor: SURFACE_LIGHT_DARK_LIGHT[3],
  },
  input: {
    borderStyle: "solid",
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    fontSize: BODY_FONT_SIZES.xlarge,
    width: "85%",
  },
  focus: {
    borderStyle: "solid",
    borderColor: FORM_COLORS.input.focus,
    borderWidth: 2,
    backgroundColor: FORM_COLORS.input.focusBackground,
  },
  error: {
    borderColor: FORM_COLORS.input.error,
  },
  textIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[4],
  },
  icon: {},
  disable: {
    borderColor: FORM_COLORS.input.disable,
    backgroundColor: FORM_COLORS.input.disable,
  },
  label: {
    marginBottom: 4,
  },
  helpText: {
    color: FORM_COLORS.input.helpText,
  },
});

export default Input;
