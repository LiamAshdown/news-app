import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { FORM_COLORS, SURFACE_LIGHT_DARK_LIGHT } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { BORDER_RADIUS, PADDING } from "../../constants/padding";
import { BODY_FONT_SIZES } from "../../constants/typography";

const Dropdown = ({ disable = false, iconName = "" }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Pear", value: "pear" },
  ]);

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
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Choose a fruit."
          style={[styles.input, switchInputOnDisable()]}
          dropDownContainerStyle={styles.dropDownContainerStyle}
          textStyle={styles.textStyle}
          disabled={disable}
        />
      </View>
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
  },
  textStyle: {
    fontFamily: FONT_FAMILY_URBANIST.semibold,
    fontSize: BODY_FONT_SIZES.xlarge,
  },
});

export default Dropdown;
