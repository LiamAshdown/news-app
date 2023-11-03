import { ScrollView, StyleSheet, View } from "react-native";

import Comments from "../../components/comments/Comments";
import ViewPostBody from "../../components/view-post/ViewPostBody";
import ViewPostHeader from "../../components/view-post/ViewPostHeader";
import ViewPostPublisher from "../../components/view-post/ViewPostPublisher";
import { THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING } from "../../constants/padding";

const ViewPostScreen = () => {
  const Gapper = () => {
    return <View style={styles.margin} />;
  };

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.container}>
        <ViewPostHeader />
        <Gapper />
        <ViewPostBody />
        <Gapper />
        <ViewPostPublisher />
        <Gapper />
        <Comments />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: CONTAINER_PADDING,
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
});

export default ViewPostScreen;
