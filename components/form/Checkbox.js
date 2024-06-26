import { StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import Feedback from "./Feedback";
import { THEME_COLORS } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";

const Checkbox = ({
  text = "",
  style = {},
  textStyle = {},
  value = false,
  onChange,
  feedback = null,
}) => {
  return (
    <>
      <BouncyCheckbox
        fillColor={THEME_COLORS.primary}
        iconStyle={styles.iconStyle}
        textStyle={[styles.textStyle, textStyle]}
        value={value}
        text={text}
        style={style}
        onPress={onChange}
      />
      {feedback && (
        <Feedback variant={feedback.type}>{feedback.message}</Feedback>
      )}
    </>
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
