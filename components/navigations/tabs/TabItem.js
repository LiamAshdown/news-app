import { StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE } from "../../../constants/colors";
import Text from "../../typography/Text";

const TabItem = ({ Icon, text }) => {
  return (
    <View>
      <Icon iconColor={COLOR_GREY_SCALE[500]} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLOR_GREY_SCALE[500],
  },
});

export default TabItem;
