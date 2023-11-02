import { StyleSheet, View } from "react-native";

import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Screen from "../../../components/auth/register/Screen";
import Checkbox from "../../../components/form/Checkbox";
import Input from "../../../components/form/Input";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";

const CreateAccountScreen = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("WhereDoYouComeFrom");
  };

  return (
    <Screen continueText="Create Account" onContinueHandler={onContinue}>
      <View>
        <HeaderTitle
          title="Create Account 👩‍💻"
          description="Join our community and personalize your news experience."
        />
        <View style={{ marginTop: PADDING[24] }}>
          <Input placeholder="Email" iconName="mail" label="Email" />
          <Input
            placeholder="Password"
            iconName="lock-closed"
            label="Password"
            secureTextEntry
            style={{ marginTop: PADDING[16] }}
          />
          <Checkbox
            text="I agree to the Terms and Conditions"
            style={{
              marginTop: PADDING[16],
            }}
          />
        </View>
        <View style={styles.alreadyHaveAccount}>
          <Text>Don't have an account?</Text>
          <Text color={styles.signIn.color} bold>
            Sign Up
          </Text>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  alreadyHaveAccount: {
    borderTopWidth: 1,
    borderColor: COLOR_GREY_SCALE[300],
    borderStyle: "solid",
    marginTop: PADDING[16],
    paddingTop: PADDING[16],
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  signIn: {
    color: THEME_COLORS.primary,
  },
});

export default CreateAccountScreen;
