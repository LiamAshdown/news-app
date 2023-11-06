import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import Input from "../../../components/form/Input";
import Text from "../../../components/typography/Text";
import {
  BORDER_GREY_COLOR,
  COLOR_GREY_SCALE,
  SURFACE_LIGHT_DARK_LIGHT,
  THEME_COLORS,
} from "../../../constants/colors";
import { CONTAINER_PADDING } from "../../../constants/padding";

const CreatePostScreen = () => {
  const [image, setImage] = useState(null);

  const Gapper = () => {
    return <View style={{ height: 20 }} />;
  };

  const onUploadImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.uploadContainer}
          onPress={onUploadImage}
        >
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
        <Gapper />
        <View>
          <Input placeholder="Your Title" label="Title" />
          <Gapper />
          <Input
            placeholder="Write your story here..."
            label="Story"
            helpText="TODO: Implement rich text editor via web view"
            multiline
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  container: {
    padding: CONTAINER_PADDING,
    paddingTop: 0,
  },
  contentContainer: {},
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

export default CreatePostScreen;
