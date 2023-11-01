import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

import Feedback from "./Feedback";
import { FORM_COLORS, SURFACE_LIGHT_DARK_LIGHT } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { BORDER_RADIUS, PADDING } from "../../constants/padding";
import { BODY_FONT_SIZES } from "../../constants/typography";

const Input = ({
  iconName = null,
  feedback = null,
  disable = false,
  secureTextEntry = false,
  multiline = false,
  style,
}) => {
  const [text, onChangeText] = useState("");
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
    if (text.length > 0 || disable) {
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
    if (multiline && iconName) {
      return {
        paddingTop: 20,
      };
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

    if (text.length > 0) {
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
    <View style={style}>
      <View style={[styles.container, switchOnFocus(), switchOnDisable()]}>
        {iconName && (
          <Ionicons
            name={iconName}
            color={switchIconOnFocusAndIfNotEmptyOrDisableColor()}
            style={styles.icon}
            size={20}
          />
        )}
        <TextInput
          placeholder="Lorem Ipsum"
          placeholderTextColor={FORM_COLORS.input.placeholder}
          onChangeText={onChangeText}
          value={text}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          multiline={multiline}
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
        />
        {secureTextEntry && (
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color={switchIconOnFocusAndIfNotEmptyOrDisableColor()}
            style={styles.icon}
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
      {feedback && (
        <Feedback variant={feedback.type}>{feedback.message}</Feedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
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
    outlineStyle: "none",
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    fontSize: BODY_FONT_SIZES.xlarge,
  },
  focus: {
    outlineStyle: "solid",
    outlineColor: FORM_COLORS.input.focus,
    outlineWidth: 2,
    backgroundColor: FORM_COLORS.input.focusBackground,
  },
  error: {
    borderColor: FORM_COLORS.input.error,
  },
  icon: {
    marginRight: 12,
  },
  disable: {
    borderColor: FORM_COLORS.input.disable,
    backgroundColor: FORM_COLORS.input.disable,
  },
});

export default Input;
