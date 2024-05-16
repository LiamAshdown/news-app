import React from "react";
import { Switch } from "react-native";

import { SURFACE_LIGHT_DARK_LIGHT, THEME_COLORS } from "../../constants/colors";

const ToggleSwitch = ({ onChange, value }) => {
  return (
    <Switch
      trackColor={{
        false: SURFACE_LIGHT_DARK_LIGHT[8],
        true: THEME_COLORS.primary,
      }}
      thumbColor={THEME_COLORS.white}
      onValueChange={onChange}
      value={value}
    />
  );
};

export default ToggleSwitch;
