import { View, StyleSheet } from "react-native";

import Progress from "./Progress";
import { COLOR_GREY_SCALE } from "../../constants/colors";
import Button from "../Button";
import Header from "../typography/Header";
import Text from "../typography/Text";

const Section = ({ title, description, onContinue, step }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerSection}>
        <Header size="medium">{title}</Header>
        <Text>{description}</Text>
        <Progress activeIndex={step - 1} />
      </View>
      <View style={styles.action}>
        <View style={styles.actionInner}>
          <View style={{ flex: 1 }}>
            <Button rounded variant="white">
              Skip
            </Button>
          </View>
          <View style={{ flex: 1 }}>
            <Button onPressHandler={onContinue} rounded>
              Continue
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    justifyContent: "space-between",
    paddingTop: 16,
    paddingHorizontal: 24,
    flex: 1,
  },
  innerSection: {
    gap: 16,
  },
  action: {
    borderStyle: "solid",
    borderTopWidth: 1,
    borderTopColor: COLOR_GREY_SCALE[300],
    paddingTop: 16,
  },
  actionInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    gap: 16,
  },
});

export default Section;
