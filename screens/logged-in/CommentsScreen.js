import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Comments from "../../components/comments/Comments";
import CommentsTab from "../../components/comments/CommentsTab";
import Input from "../../components/form/Input";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING } from "../../constants/padding";

const CommentsScreen = () => {
  const tabs = ["Top", "Newest"];
  const [activeTab, setActiveTab] = useState(0);

  const handleTabPress = (index) => {
    setActiveTab(index);
    // You can add logic to change the content of your screen based on the selected tab.
  };

  const Gapper = () => {
    return <View style={styles.margin} />;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.commentsContainer}>
          <CommentsTab
            tabs={tabs}
            activeTab={activeTab}
            onTabPress={handleTabPress}
          />
          <Gapper />
          <Comments />
        </View>
      </ScrollView>
      <View style={styles.sendCommentContainer}>
        <View style={styles.sendCommentWrapper}>
          <View style={{ flex: 1 }}>
            <Input placeholder="Add a comment" />
          </View>
          <View style={styles.iconBackground}>
            <Ionicons
              name="send"
              size={24}
              color={THEME_COLORS.white}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.white,
  },
  commentsContainer: {
    flex: 1,
    padding: CONTAINER_PADDING,
    paddingTop: 0,
  },
  margin: {
    marginBottom: 20,
  },
  sendCommentContainer: {
    position: "absolute",
    height: 150,
    bottom: 0,
    width: "100%",
    backgroundColor: THEME_COLORS.white,
    borderTopWidth: 1,
    borderColor: COLOR_GREY_SCALE[300],
    borderStyle: "solid",
  },
  sendCommentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: CONTAINER_PADDING,
    gap: 20,
  },
  iconBackground: {
    backgroundColor: THEME_COLORS.primary,
    borderRadius: 50,
    height: 55,
    width: 55,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
  },
});

export default CommentsScreen;
