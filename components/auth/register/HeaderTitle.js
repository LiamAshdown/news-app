import { StyleSheet, View } from "react-native";

import { COLOR_GREY_SCALE } from "../../../constants/colors";
import Header from "../../typography/Header";
import Text from "../../typography/Text";

const HeaderTitle = ({ title, description }) => {
  return (
    <View style={styles.header}>
      <Header size="medium">{title}</Header>
      <Text size="large" color={COLOR_GREY_SCALE[700]}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: 16,
  },
});

export default HeaderTitle;
