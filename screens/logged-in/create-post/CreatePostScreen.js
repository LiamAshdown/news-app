import * as ImagePicker from "expo-image-picker";
import { Formik } from "formik";
import { useLayoutEffect, useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import Input from "../../../components/form/Input";
import PostUploadCoverImage from "../../../components/post/PostUploadCoverImage";
import Text from "../../../components/typography/Text";
import {
  BORDER_GREY_COLOR,
  COLOR_GREY_SCALE,
  SURFACE_LIGHT_DARK_LIGHT,
  THEME_COLORS,
} from "../../../constants/colors";
import { CONTAINER_PADDING, PADDING } from "../../../constants/padding";
import { createPostSchema } from "../../../lib/validation";
import { setPost } from "../../../store/post/reducer";

const CreatePostScreen = ({ navigation }) => {
  const formikRef = useRef();
  const dispatch = useDispatch();

  const Header = ({ handleSubmit, navigation }) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <Text
              style={{
                marginRight: PADDING[12],
              }}
              color={THEME_COLORS.primary}
              onPressHandler={handleSubmit}
              bold
            >
              Preview
            </Text>
          );
        },
      });
    }, [navigation, handleSubmit]);

    return <></>;
  };

  const Gapper = () => {
    return <View style={{ height: 20 }} />;
  };

  const onContinue = async (data) => {
    dispatch(setPost(data));

    navigation.navigate("TagPost");
  };

  const onUploadImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const image = result.assets[0];

      const localUri = image.uri;
      const filename = localUri.split("/").pop();

      // Infer the type of the image
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      console.log(image);

      formikRef.current.setFieldValue("image", {
        uri: localUri,
        name: filename,
        type,
      });
    }
  };

  return (
    <Formik
      initialValues={{
        title: "",
        content: "",
        image: null,
      }}
      validationSchema={createPostSchema}
      onSubmit={(values) => {
        onContinue(values);
      }}
      innerRef={formikRef}
    >
      {({ handleChange, errors, handleSubmit, touched, values }) => (
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <PostUploadCoverImage
              onUploadImage={onUploadImage}
              image={values.image?.uri}
              feedback={
                touched.image &&
                errors.image && {
                  type: "error",
                  message: errors.image,
                }
              }
            />
            <Gapper />
            <View>
              <Input
                placeholder="Your Title"
                label="Title"
                value={values.title}
                onChange={handleChange("title")}
                feedback={
                  touched.title &&
                  errors.title && {
                    type: "error",
                    message: errors.title,
                  }
                }
              />
              <Gapper />
              <Input
                placeholder="Write your story here..."
                label="Story"
                value={values.content}
                onChange={handleChange("content")}
                feedback={
                  touched.content &&
                  errors.content && {
                    type: "error",
                    message: errors.content,
                  }
                }
                helpText="TODO: Implement rich text editor via web view"
                multiline
              />
            </View>
          </View>
          <Header handleSubmit={handleSubmit} navigation={navigation} />
        </ScrollView>
      )}
    </Formik>
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
