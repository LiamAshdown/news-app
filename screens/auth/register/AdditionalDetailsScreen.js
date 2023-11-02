import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Checkbox from "../../../components/form/Checkbox";
import Input from "../../../components/form/Input";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";
import { setRegisterProgress } from "../../../store/auth/reducer";

const AdditionalDetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(setRegisterProgress(1));
      return () => {};
    }, [dispatch]),
  );

  const onContinue = () => {
    navigation.navigate("Success");
  };

  return (
    <Screen continueText="Finish" onContinueHandler={onContinue}>
      <View>
        <HeaderTitle
          title="Create public profile 🌎"
          description="This profile will appear public, so people can find you and the stories you share."
        />
        <View style={{ marginTop: PADDING[24] }}>
          <Input placeholder="Full Name" label="Full Name" />
          <Input
            placeholder="Username"
            label="Username"
            style={{ marginTop: PADDING[16] }}
          />
          <Input
            placeholder="Bio"
            label="Bio"
            multiline
            style={{ marginTop: PADDING[16] }}
          />
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

export default AdditionalDetailsScreen;
