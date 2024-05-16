import { useFocusEffect } from "@react-navigation/native";
import { current } from "@reduxjs/toolkit";
import { Formik } from "formik";
import { useCallback, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Input from "../../../components/form/Input";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";
import { additionalDetailsSchema } from "../../../lib/validation";
import { onboardingStepSix } from "../../../store/auth/actions";
import {
  selectErrors,
  selectLoading,
  selectUser,
  setRegisterProgress,
} from "../../../store/auth/reducer";

const AdditionalDetailsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const formikRef = useRef();
  const errors = useSelector(selectErrors);
  const loading = useSelector(selectLoading);
  const currentUser = useSelector(selectUser);

  useFocusEffect(
    useCallback(() => {
      dispatch(setRegisterProgress(1));
      return () => {};
    }, [dispatch]),
  );

  const onContinue = async (data) => {
    dispatch(onboardingStepSix(data)).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigation.navigate("Success");
      }
    });
  };

  useEffect(() => {
    if (errors) {
      formikRef.current.setErrors(errors);
    }
  }, [errors]);

  return (
    <Formik
      initialValues={{
        fullName: currentUser.fullName,
        username: currentUser.username,
        bio: currentUser.bio,
      }}
      validationSchema={additionalDetailsSchema}
      onSubmit={(values) => {
        onContinue(values);
      }}
      innerRef={formikRef}
    >
      {({ handleChange, errors, handleSubmit, touched, values }) => (
        <Screen
          continueText="Finish"
          onContinueHandler={handleSubmit}
          loading={loading}
        >
          <View>
            <HeaderTitle
              title="Create public profile 🌎"
              description="This profile will appear public, so people can find you and the stories you share."
            />
            <View style={{ marginTop: PADDING[24] }}>
              <Input
                placeholder="Full Name"
                label="Full Name"
                value={values.fullName}
                onChange={handleChange("fullName")}
                feedback={
                  touched.fullName &&
                  errors.fullName && {
                    type: "error",
                    message: errors.fullName,
                  }
                }
              />
              <Input
                placeholder="Username"
                label="Username"
                style={{ marginTop: PADDING[16] }}
                helpText="This will be ytour username on the platform"
                value={values.username}
                onChange={handleChange("username")}
                feedback={
                  touched.username &&
                  errors.username && {
                    type: "error",
                    message: errors.username,
                  }
                }
              />
              <Input
                placeholder="Bio"
                label="Bio"
                multiline
                style={{ marginTop: PADDING[16] }}
                helpText="Tell us a little bit about yourself"
                value={values.bio}
                onChange={handleChange("bio")}
                feedback={
                  touched.bio &&
                  errors.bio && {
                    type: "error",
                    message: errors.bio,
                  }
                }
              />
            </View>
          </View>
        </Screen>
      )}
    </Formik>
  );
};

export default AdditionalDetailsScreen;
