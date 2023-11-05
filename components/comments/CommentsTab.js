import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { COLOR_GREY_SCALE, THEME_COLORS } from "../../constants/colors";
import Text from "../typography/Text";

const CommentsTab = ({ tabs, activeTab, onTabPress }) => {
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tabItem,
            activeTab === index ? styles.activeTab : styles.inActiveTab,
          ]}
          onPress={() => onTabPress(index)}
        >
          <Text
            size="xlarge"
            bold
            style={
              activeTab === index ? styles.activeText : styles.inactiveText
            }
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  activeTab: {
    borderBottomColor: THEME_COLORS.primary,
    borderBottomWidth: 4,
    borderStyle: "solid",
  },
  inActiveTab: {
    borderBottomColor: COLOR_GREY_SCALE[500],
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  activeText: {
    color: THEME_COLORS.primary,
  },
  inactiveText: {
    color: COLOR_GREY_SCALE[500],
  },
});

export default CommentsTab;
