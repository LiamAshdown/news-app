import { Formik } from "formik";
import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Checkbox from "../../../components/form/Checkbox";
import Input from "../../../components/form/Input";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";
import { createAccountSchema } from "../../../lib/validation";
import { onboardingStepOne } from "../../../store/auth/actions";
import { selectErrors, selectLoading } from "../../../store/auth/reducer";

const CreateAccountScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const formikRef = useRef();
  const errors = useSelector(selectErrors);
  const loading = useSelector(selectLoading);

  const onContinue = async (data) => {
    dispatch(onboardingStepOne(data)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigation.navigate("WhereDoYouComeFrom");
      }
    });
  };

  const onSignIn = () => {
    navigation.navigate("SignIn");
  };

  useEffect(() => {
    if (errors) {
      formikRef.current.setErrors(errors);
    }
  }, [errors]);

  return (
    <Formik
      initialValues={{ email: "", password: "", agree: false }}
      validationSchema={createAccountSchema}
      onSubmit={(values) => {
        onContinue(values);
      }}
      innerRef={formikRef}
    >
      {({
        handleChange,
        errors,
        handleSubmit,
        setFieldValue,
        touched,
        values,
      }) => (
        <Screen
          continueText="Create Account"
          onContinueHandler={handleSubmit}
          loading={loading}
        >
          <View>
            <HeaderTitle
              title="Create Account 👩‍💻"
              description="Join our community and personalize your news experience."
            />
            <View style={{ marginTop: PADDING[24] }}>
              <Input
                placeholder="Email"
                iconName="mail"
                label="Email"
                value={values.email}
                onChange={handleChange("email")}
                feedback={
                  touched.email &&
                  errors.email && {
                    type: "error",
                    message: errors.email,
                  }
                }
              />
              <Input
                placeholder="Password"
                iconName="lock-closed"
                label="Password"
                secureTextEntry
                value={values.password}
                onChange={handleChange("password")}
                style={{ marginTop: PADDING[16] }}
                feedback={
                  touched.password &&
                  errors.password && {
                    type: "error",
                    message: errors.password,
                  }
                }
              />
              <Checkbox
                text="I agree to the Terms and Conditions"
                onChange={() => setFieldValue("agree", !values.agree)}
                style={{
                  marginTop: PADDING[16],
                }}
                value={values.agree}
                feedback={
                  touched.agree &&
                  errors.agree && {
                    type: "error",
                    message: errors.agree,
                  }
                }
              />
            </View>
            <View style={styles.alreadyHaveAccount}>
              <Text>Already have an account?</Text>
              <Text color={styles.signIn.color} bold onPressHandler={onSignIn}>
                Sign In
              </Text>
            </View>
          </View>
        </Screen>
      )}
    </Formik>
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
