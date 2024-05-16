import { Image, StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import { BORDER_RADIUS, PADDING } from "../../constants/padding";
import Header from "../typography/Header";

const ViewPostImageTitle = ({ imageUrl, title }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View>
        <Header size="small">
          {title ? title : "Lorem ipsum dolor sit amet, consectetur"}
        </Header>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 240,
    width: "100%",
    borderRadius: BORDER_RADIUS[8],
  },
  imageContainer: {
    justifyContent: "center",
    marginBottom: PADDING[12],
  },
});

export default ViewPostImageTitle;
