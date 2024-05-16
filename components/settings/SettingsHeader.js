import { StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE } from "../../constants/colors";
import { PADDING } from "../../constants/padding";
import Text from "../typography/Text";

const SettingsHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText} size="large">
          {title}
        </Text>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: PADDING[16],
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLOR_GREY_SCALE[500],
    marginVertical: PADDING[12],
    flex: 1,
  },
  headerText: {
    color: COLOR_GREY_SCALE[500],
  },
});

export default SettingsHeader;
