import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Toast from "react-native-root-toast";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../../../components/auth/Screen";
import ToggleSwitch from "../../../components/form/ToggleSwitch";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE } from "../../../constants/colors";
import { BORDER_RADIUS, PADDING } from "../../../constants/padding";
import { getProfile, updateNotifications } from "../../../store/auth/actions";
import { selectUser } from "../../../store/auth/reducer";

const CustomizeNotificationsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const [selectedNotifications, setSelectedNotifications] = useState({
    breaking_news_notification: false,
    news_recommendations: false,
    top_story_notifications: false,
    news_features: false,
    daily_or_weekly_digest: false,
    someone_is_following_me: false,
    stories_from_those_i_follow: false,
  });

  useFocusEffect(
    useCallback(() => {
      dispatch(getProfile());
      return () => {};
    }, [dispatch]),
  );

  useEffect(() => {
    if (currentUser) {
      const selectedNotifications = {};

      // Hack fix turn camel case to snake case
      Object.keys(currentUser.userNotification).forEach((key) => {
        selectedNotifications[key.replace(/([A-Z])/g, "_$1").toLowerCase()] =
          currentUser.userNotification[key];
      });

      setSelectedNotifications(selectedNotifications);
    }
  }, [currentUser]);

  const onContinue = () => {
    dispatch(updateNotifications(selectedNotifications)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        Toast.show("Notifications updated", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
        });

        navigation.goBack();
      }
    });
  };

  const NotificationItem = ({ text, type }) => {
    const onToggle = (toggle) => {
      setSelectedNotifications((prevState) => ({
        ...prevState,
        [type]: toggle,
      }));
    };

    return (
      <View style={styles.notificationItem}>
        <View>
          <Text bold>{text}</Text>
        </View>
        <View>
          <ToggleSwitch
            value={selectedNotifications[type]}
            onChange={onToggle}
          />
        </View>
      </View>
    );
  };

  return (
    <Screen continueText="Save" onContinueHandler={onContinue}>
      <View>
        <View>
          <NotificationItem
            text="Breaking news notifications"
            type="breaking_news_notification"
          />
          <NotificationItem
            text="News recommendations"
            type="news_recommendations"
          />
          <NotificationItem
            text="Top story notifications"
            type="top_story_notifications"
          />
          <NotificationItem text="New Features" type="news_features" />
          <NotificationItem
            text="Daily or weekly digest"
            type="daily_or_weekly_digest"
          />
          <NotificationItem
            text="Someone is following me"
            type="someone_is_following_me"
          />
          <NotificationItem
            text="Stories from those I follow"
            type="stories_from_those_i_follow"
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: PADDING[32],
  },
});

export default CustomizeNotificationsScreen;
