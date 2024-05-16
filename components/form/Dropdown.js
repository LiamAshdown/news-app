import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import Feedback from "./Feedback";
import { FORM_COLORS, SURFACE_LIGHT_DARK_LIGHT } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { BORDER_RADIUS, PADDING } from "../../constants/padding";
import { BODY_FONT_SIZES } from "../../constants/typography";
import Text from "../typography/Text";

const Dropdown = ({
  disable = false,
  iconName = "",
  value = null,
  label = "",
  values = [],
  placeholder = "",
  onChangeHandler = () => {},
  feedback = null,
}) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(values);

  const switchOnFocus = () => {
    if (open && !disable) {
      return styles.focus;
    } else {
      return {};
    }
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

  const switchIconOnFocusAndIfNotEmptyOrDisableColor = () => {
    if (disable) {
      return FORM_COLORS.input.textDisable;
    }

    if (open) {
      return FORM_COLORS.input.focus;
    }

    if (value) {
      return FORM_COLORS.input.text;
    }

    return FORM_COLORS.input.placeholder;
  };

  return (
    <View>
      {label && (
        <Text style={styles.label} bold>
          {label}
        </Text>
      )}
      <View style={[styles.container, switchOnFocus(), switchOnDisable()]}>
        {iconName && (
          <Ionicons
            name={iconName}
            color={switchIconOnFocusAndIfNotEmptyOrDisableColor()}
            style={styles.icon}
            size={20}
          />
        )}
        <DropDownPicker
          open={open}
          value={value}
          setValue={(test) => onChangeHandler(test())}
          items={items}
          setOpen={setOpen}
          setItems={setItems}
          listMode="MODAL"
          placeholder={placeholder}
          style={[styles.input, switchInputOnDisable()]}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          textStyle={styles.textStyle}
          disabled={disable}
        />
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
    paddingTop: PADDING[4],
    paddingBottom: PADDING[4],
    paddingLeft: PADDING[8],
    paddingRight: PADDING[8],
    borderColor: SURFACE_LIGHT_DARK_LIGHT[3],
    backgroundColor: SURFACE_LIGHT_DARK_LIGHT[3],
    width: "100%",
  },
  input: {
    borderWidth: 0,
    backgroundColor: "none",
    padding: 0,
  },
  focus: {
    borderStyle: "solid",
    borderColor: FORM_COLORS.input.focus,
    borderWidth: 2,
    backgroundColor: FORM_COLORS.input.focusBackground,
  },
  disable: {
    borderColor: FORM_COLORS.input.disable,
    backgroundColor: FORM_COLORS.input.disable,
  },
  dropDownContainerStyle: {
    backgroundColor: SURFACE_LIGHT_DARK_LIGHT[3],
    borderColor: SURFACE_LIGHT_DARK_LIGHT[3],
    fontFamily: FONT_FAMILY_URBANIST.regular,
    overflow: "visible",
  },
  textStyle: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    fontSize: BODY_FONT_SIZES.xlarge,
  },
  label: {
    marginBottom: 4,
  },
});

export default Dropdown;
