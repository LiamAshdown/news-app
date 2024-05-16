import { ScrollView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import SettingsHeader from "../../components/settings/SettingsHeader";
import SettingsItem from "../../components/settings/SettingsItem";
import { THEME_COLORS } from "../../constants/colors";
import { CONTAINER_PADDING, PADDING } from "../../constants/padding";
import { logout } from "../../store/auth/reducer";

const SettingsScreen = ({ navigation }) => {
  const onNavigate = (screen) => {
    navigation.navigate(screen);
  };

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    navigation.navigate("Auth", {
      screen: "Landing",
    });
  };

  return (
    <ScrollView
      style={styles.background}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.innerContainer}>
        <SettingsHeader title="General" />
        <SettingsItem
          text="Customize Interests"
          iconName="apps-outline"
          navigateTo={() => onNavigate("SettingsCustomizeNewsFeed")}
        />
        <SettingsItem text="Personal Info" iconName="person-outline" />
        <SettingsItem
          text="Notifications"
          iconName="notifications-outline"
          navigateTo={() => onNavigate("SettingsCustomizeNotification")}
        />
        <SettingsItem text="Security" iconName="lock-closed-outline" />
        <SettingsItem text="Language" iconName="language-outline" />
        <SettingsHeader title="About" />
        <SettingsItem
          text="Follow us on Social Media"
          iconName="logo-twitter"
        />
        <SettingsItem text="Help & Support" iconName="help-circle-outline" />
        <SettingsItem
          text="Privacy Policy"
          iconName="shield-checkmark-outline"
        />
        <SettingsItem
          text="About Newsline"
          iconName="information-circle-outline"
        />
        <SettingsItem
          text="Logout"
          iconName="log-out-outline"
          color={THEME_COLORS.red}
          showIcon={false}
          navigateTo={onLogout}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    padding: CONTAINER_PADDING,
    paddingTop: 0,
  },
  background: {
    backgroundColor: THEME_COLORS.white,
  },
  innerContainer: {
    gap: PADDING[28],
  },
});

export default SettingsScreen;
