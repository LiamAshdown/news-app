import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { THEME_COLORS } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";

const Checkbox = ({ text = "", style = {} }) => {
  return (
    <BouncyCheckbox
      fillColor={THEME_COLORS.primary}
      iconStyle={styles.iconStyle}
      textStyle={styles.textStyle}
      text={text}
      style={style}
    />
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    borderColor: THEME_COLORS.primary,
  },
  textStyle: {
    fontFamily: FONT_FAMILY_URBANIST.regular,
  },
});

export default Checkbox;
