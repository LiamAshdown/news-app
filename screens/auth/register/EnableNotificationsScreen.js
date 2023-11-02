import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Checkbox from "../../../components/form/Checkbox";
import Input from "../../../components/form/Input";
import ToggleSwitch from "../../../components/form/ToggleSwitch";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";
import { setRegisterProgress } from "../../../store/auth/reducer";

const EnableNotificationsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(setRegisterProgress(0.8));
      return () => {};
    }, [dispatch]),
  );

  const onContinue = () => {
    navigation.navigate("AdditionalDetails");
  };

  const NotificationItem = ({ text }) => {
    return (
      <View style={styles.notificationItem}>
        <View>
          <Text bold>{text}</Text>
        </View>
        <View>
          <ToggleSwitch />
        </View>
      </View>
    );
  };

  return (
    <Screen continueText="Continue" onContinueHandler={onContinue}>
      <View>
        <HeaderTitle
          title="Enable notifications 🔔"
          description="Stay updated, never miss a story. Receive notifications for breaking news and personalized updates."
        />
        <View style={{ marginTop: PADDING[24] }}>
          <NotificationItem text="Breaking news notifications" />
          <NotificationItem text="News recommendations" />
          <NotificationItem text="Top story notifications" />
          <NotificationItem text="New Features" />
          <NotificationItem text="Daily or weekly digest" />
          <NotificationItem text="Stories from those I follow" />
          <NotificationItem text="Someone is following me" />
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

export default EnableNotificationsScreen;
