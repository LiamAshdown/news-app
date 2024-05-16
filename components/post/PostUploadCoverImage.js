import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import {
  BORDER_GREY_COLOR,
  COLOR_GREY_SCALE,
  SURFACE_LIGHT_DARK_LIGHT,
  THEME_COLORS,
} from "../../constants/colors";
import Feedback from "../form/Feedback";
import Text from "../typography/Text";

const PostUploadCoverImage = ({ onUploadImage, image, feedback }) => {
  return (
    <>
      <TouchableOpacity style={styles.uploadContainer} onPress={onUploadImage}>
        {!image && (
          <>
            <Ionicons
              name="image-outline"
              size={40}
              color={COLOR_GREY_SCALE[400]}
            />
            <Text style={styles.uploadText}>Add cover image</Text>
          </>
        )}
        {image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
            <View style={styles.imageIcon}>
              <Ionicons
                name="close-circle"
                size={40}
                color={THEME_COLORS.primary}
              />
            </View>
          </View>
        )}
      </TouchableOpacity>
      {feedback && (
        <Feedback variant={feedback.type}>{feedback.message}</Feedback>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    backgroundColor: SURFACE_LIGHT_DARK_LIGHT[3],
    borderColor: BORDER_GREY_COLOR,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 240,
  },
  imageIcon: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  uploadText: {
    color: COLOR_GREY_SCALE[400],
  },
});

export default PostUploadCoverImage;
