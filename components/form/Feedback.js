import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { FORM_COLORS } from "../../constants/colors";
import { FONT_FAMILY_URBANIST } from "../../constants/font";
import { BORDER_RADIUS } from "../../constants/padding";
import { BODY_FONT_SIZES } from "../../constants/typography";
import InfoCircleIcon from "../svg/icons/InfoCircle";

const Feedback = ({ variant, children, ...props }) => {
  const switchVariantBackground = () => {
    if (variant === "success") {
      return {
        backgroundColor: FORM_COLORS.feedback.background.success,
      };
    }

    return {
      backgroundColor: FORM_COLORS.feedback.background.error,
    };
  };

  const switchVariantIconColor = () => {
    if (variant === "success") {
      return FORM_COLORS.feedback.icon.success;
    }

    return FORM_COLORS.feedback.icon.error;
  };

  const switchVariantBorderColor = () => {
    if (variant === "success") {
      return {
        borderColor: FORM_COLORS.feedback.border.success,
      };
    }

    return {
      borderColor: FORM_COLORS.feedback.border.error,
    };
  };

  const switchVariantTextColor = () => {
    if (variant === "success") {
      return {
        color: FORM_COLORS.feedback.message.success,
      };
    }

    return {
      color: FORM_COLORS.feedback.message.error,
    };
  };

  return (
    <View
      style={[
        styles.alertBackground,
        styles.flexRow,
        switchVariantBackground(),
        switchVariantBorderColor(),
      ]}
      {...props}
    >
      <View style={[styles.justifyCenter, styles.flexRow]}>
        <InfoCircleIcon iconColor={switchVariantIconColor()} />
      </View>
      <Text style={[styles.alertMessage, switchVariantTextColor()]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  alertMessage: {
    fontSize: BODY_FONT_SIZES.medium,
    letterSpacing: 0,
    lineHeight: 22,
    fontFamily: FONT_FAMILY_URBANIST.regular,
    textAlign: "left",
    marginLeft: 8,
    flex: 1,
  },
  alertBackground: {
    marginTop: 5,
    alignSelf: "stretch",
    borderRadius: BORDER_RADIUS[8],
    borderStyle: "solid",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default Feedback;
