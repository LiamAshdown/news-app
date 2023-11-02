import { Image, View, StyleSheet } from "react-native";

import { SURFACE_LIGHT_DARK_LIGHT } from "../../constants/colors";

const Hero = ({ imageSrc }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={imageSrc} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: SURFACE_LIGHT_DARK_LIGHT[300],
    overflow: "hidden",
    height: 450,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    position: "absolute",
    top: 0,
  },
});

export default Hero;
