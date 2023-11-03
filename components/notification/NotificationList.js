import { StyleSheet, View } from "react-native";

import NotificationGroup from "./NotificationGroup";

const NotificationList = () => {
  return (
    <View style={styles.container}>
      <NotificationGroup />
      <NotificationGroup />
      <NotificationGroup />
      <NotificationGroup />
      <NotificationGroup />
      <NotificationGroup />
      <NotificationGroup />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default NotificationList;
