import { BlurView } from "expo-blur";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import HeaderBar from "../../components/HeaderBar";
import BookMarkBottomSheet from "../../components/bottom-sheets/BookMarkBottomSheet";
import Comments from "../../components/comments/Comments";
import List from "../../components/trending/List";
import ViewPostBody from "../../components/view-post/ViewPostBody";
import ViewPostHeader from "../../components/view-post/ViewPostHeader";
import ViewPostPublisher from "../../components/view-post/ViewPostPublisher";
import { THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING } from "../../constants/padding";
import { isBlurActive } from "../../store/misc/reducer";

const ViewPostScreen = () => {
  const Gapper = () => {
    return <View style={styles.margin} />;
  };

  const blurActive = useSelector(isBlurActive);

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View>
        <View style={styles.container}>
          <ViewPostHeader />
          <Gapper />
          <ViewPostBody />
          <Gapper />
          <ViewPostPublisher />
          <Gapper />
          <HeaderBar title="3.2k comments" />
          <Comments />
        </View>
        <View>
          <View style={styles.paddingHorizontal}>
            <HeaderBar title="More from CNN News" />
            <Gapper />
          </View>
          <View style={styles.paddingLeft}>
            <List />
          </View>
          <Gapper />
          <View style={styles.paddingHorizontal}>
            <HeaderBar title="Related" />
            <Gapper />
          </View>
          <View style={styles.paddingLeft}>
            <List />
          </View>
        </View>
        {blurActive && (
          <BlurView
            intensity={25}
            style={{ position: "absolute", height: "100%", width: "100%" }}
          />
        )}
      </View>
      <BookMarkBottomSheet />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: CONTAINER_PADDING,
  },
  paddingHorizontal: {
    paddingHorizontal: CONTAINER_PADDING,
  },
  paddingLeft: {
    paddingLeft: CONTAINER_PADDING,
  },
  contentContainerStyle: {
    flexGrow: 1,
  },
  background: {
    backgroundColor: THEME_COLORS.white,
  },
  margin: {
    marginBottom: 20,
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    margin: 16,
    textAlign: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
});

export default ViewPostScreen;
