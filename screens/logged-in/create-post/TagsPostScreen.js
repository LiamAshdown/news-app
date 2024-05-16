import { Formik } from "formik";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Alert from "../../../components/Alert";
import Button from "../../../components/Button";
import Dropdown from "../../../components/form/Dropdown";
import Input from "../../../components/form/Input";
import Text from "../../../components/typography/Text";
import ViewPostImageTitle from "../../../components/view-post/ViewPostImageTitle";
import {
  SURFACE_LIGHT_DARK_LIGHT,
  THEME_COLORS,
} from "../../../constants/colors";
import { CONTAINER_PADDING, PADDING } from "../../../constants/padding";
import { tagPostSchema } from "../../../lib/validation";
import { getPostTopics, storePost } from "../../../store/post/actions";
import {
  isLoading,
  selectPost,
  selectPostTopics,
  setPost,
} from "../../../store/post/reducer";

const TagsPostScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const post = useSelector(selectPost);
  const postTopics = useSelector(selectPostTopics);
  const loading = useSelector(isLoading);
  const formikRef = useRef();

  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!post) {
      navigation.navigate("CreatePost");
    }
  }, [post]);

  useEffect(() => {
    dispatch(getPostTopics());
  }, []);

  const Gapper = () => {
    return <View style={{ height: 20 }} />;
  };

  const onContinue = async (data) => {
    if (loading) {
      return;
    }

    await dispatch(setPost(data));
    dispatch(storePost()).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigation.navigate("PostPublished");
      } else {
        if (response.payload) {
          if (response.payload.errors) {
            if (response.payload.errors.image) {
              setError(response.payload.errors.image);
            }
          }
        }
      }
    });
  };

  const Header = ({ handleSubmit, navigation }) => {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <Text
              style={{
                marginRight: PADDING[12],
                opacity: loading ? 0.5 : 1,
              }}
              color={THEME_COLORS.primary}
              onPressHandler={handleSubmit}
              bold
            >
              Publish
            </Text>
          );
        },
      });
    }, [navigation, handleSubmit]);

    return <></>;
  };

  return (
    <>
      <Formik
        initialValues={{
          postTopicId: null,
          postTags: [],
        }}
        validationSchema={tagPostSchema}
        onSubmit={(values) => {
          onContinue(values);
        }}
        innerRef={formikRef}
      >
        {({ errors, handleSubmit, touched, values }) => (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            <View style={styles.container}>
              <View style={styles.headerContainer}>
                <ViewPostImageTitle
                  title={post.title}
                  imageUrwl={post.image.uri}
                />
              </View>
              {error && (
                <Alert
                  type="danger"
                  style={{
                    marginBottom: 20,
                  }}
                >
                  {error}
                </Alert>
              )}
              <View>
                <Dropdown
                  key={postTopics.length}
                  label="Select Topic"
                  values={postTopics.map((t) => ({
                    label: t.name,
                    value: t.id,
                  }))}
                  placeholder="Select Topic"
                  value={values.postTopicId}
                  onChangeHandler={(item) => {
                    formikRef.current.setFieldValue("postTopicId", item, true);
                  }}
                  feedback={
                    errors.postTopicId && {
                      type: "error",
                      message: errors.postTopicId,
                    }
                  }
                />
                <Gapper />
                <Input
                  label="Add Tags"
                  placeholder="Type tag and enter"
                  onChange={setTagInput}
                  value={tagInput}
                  onSubmitEditing={() => {
                    setTagInput("");

                    formikRef.current.setFieldValue(
                      "postTags",
                      [...values.postTags, tagInput],
                      true,
                    );
                  }}
                  feedback={
                    touched.postTags &&
                    errors.postTags && {
                      type: "error",
                      message: errors.postTags,
                    }
                  }
                />
                <Gapper />
                <View style={styles.tagsContainer}>
                  {values.postTags.map((tag) => (
                    <Button
                      variant="white"
                      size="small"
                      rounded
                      key={tag}
                      onPressHandler={() => {
                        formikRef.current.setFieldValue(
                          "postTags",
                          values.postTags.filter((t) => t !== tag),
                          true,
                        );
                      }}
                      alignIcon="right"
                      iconName="close-outline"
                    >
                      {tag}
                    </Button>
                  ))}
                </View>
              </View>
            </View>
            <Header handleSubmit={handleSubmit} navigation={navigation} />
          </ScrollView>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "white",
  },
  container: {
    padding: CONTAINER_PADDING,
    paddingTop: 0,
    flexGrow: 1,
  },
  headerContainer: {
    borderBottomColor: SURFACE_LIGHT_DARK_LIGHT[7],
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingBottom: CONTAINER_PADDING,
    marginBottom: CONTAINER_PADDING,
  },
  contentContainer: {},
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: PADDING[8],
  },
});

export default TagsPostScreen;
