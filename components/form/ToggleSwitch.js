import React, { useState } from "react";
import { Switch, StyleSheet } from "react-native";

import { SURFACE_LIGHT_DARK_LIGHT, THEME_COLORS } from "../../constants/colors";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Switch
      trackColor={{
        false: SURFACE_LIGHT_DARK_LIGHT[8],
        true: THEME_COLORS.primary,
      }}
      thumbColor={THEME_COLORS.white}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default ToggleSwitch;
