import { View, StyleSheet } from "react-native";

import Button from "../../../components/Button";
import PublishStorySuccess from "../../../components/svg/PublishStorySuccess";
import Header from "../../../components/typography/Header";
import Text from "../../../components/typography/Text";
import { THEME_COLORS } from "../../../constants/colors";
import { CONTAINER_PADDING, PADDING } from "../../../constants/padding";

const PostPublishedSceeen = ({ navigation }) => {
  const onBackToHome = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.innerContainer, styles.successContainer]}>
        <PublishStorySuccess />
        <Header size="medium" style={styles.headerText}>
          Your story has been published!
        </Header>
        <Text>
          Don't forget to share with your friends to let them know you have an
          amazing story!
        </Text>
      </View>
      <View style={[styles.innerContainer, styles.actionContainer]}>
        <Button block rounded variant="white" onPressHandler={onBackToHome}>
          Back to home
        </Button>
        <Button block rounded>
          View Story
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.white,
    flex: 1,
    justifyContent: "space-between",
  },
  innerContainer: {
    padding: CONTAINER_PADDING,
  },
  successContainer: {
    alignItems: "center",
    top: "10%",
  },
  headerText: {
    textAlign: "center",
    marginBottom: PADDING[12],
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: PADDING[16],
  },
});

export default PostPublishedSceeen;
