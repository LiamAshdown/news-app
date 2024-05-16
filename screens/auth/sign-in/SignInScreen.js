import { Formik } from "formik";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Checkbox from "../../../components/form/Checkbox";
import Input from "../../../components/form/Input";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";
import { loginSchema } from "../../../lib/validation";
import { login } from "../../../store/auth/actions";

const SignInScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const formikRef = useRef();

  const onContinue = (data) => {
    dispatch(login(data)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigation.navigate("LoggedIn", {
          screen: "HomeScreen",
        });
      }
    });
  };

  const onSignUp = () => {
    navigation.navigate("Register");
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        onContinue(values);
      }}
      innerRef={formikRef}
    >
      {({ handleChange, errors, handleSubmit, touched, values }) => (
        <Screen continueText="Sign In" onContinueHandler={onContinue}>
          <View>
            <HeaderTitle
              title="Welcome back 👋"
              description="Please enter your email & password to sign in."
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
                style={{ marginTop: PADDING[16] }}
                value={values.password}
                onChange={handleChange("password")}
                feedback={
                  touched.password &&
                  errors.password && {
                    type: "error",
                    message: errors.password,
                  }
                }
              />
              <View style={styles.forgotPasswordRememberMe}>
                <Checkbox
                  text="Remember Me?"
                  style={{
                    marginTop: PADDING[16],
                  }}
                />
                <Text
                  style={styles.forgotPassword}
                  bold
                  color={THEME_COLORS.primary}
                >
                  Forgot Password?
                </Text>
              </View>
            </View>
            <View style={styles.alreadyHaveAccount}>
              <Text>Don't have an account?</Text>
              <Text color={styles.signIn.color} bold onPressHandler={onSignUp}>
                Sign Up
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
  forgotPasswordRememberMe: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotPassword: {
    marginTop: PADDING[16],
  },
});

export default SignInScreen;
