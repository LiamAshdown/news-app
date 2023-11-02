import { View, StyleSheet } from "react-native";

import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";

const Progress = ({ activeIndex = 0 }) => {
  const isActiveIndex = (index) => {
    if (activeIndex === index) {
      return {
        width: 36,
        backgroundColor: THEME_COLORS.primary,
      };
    }

    return {
      width: 8,
      backgroundColor: COLOR_GREY_SCALE[300],
    };
  };

  return (
    <View style={styles.slider}>
      {[0, 1, 2].map((_, index) => (
        <View key={index} style={[styles.slider.item, isActiveIndex(index)]} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    item: {
      backgroundColor: "#AFAFAF",
      height: 8,
      width: 32,
      borderRadius: "50%",
    },
  },
});

export default Progress;
