import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Toast from "react-native-root-toast";
import { useDispatch, useSelector } from "react-redux";

import api from "../../../api";
import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import NewsFeedTypesSkeleton from "../../../components/skeletons/NewsFeedTypesSkeleton";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { BORDER_RADIUS, PADDING } from "../../../constants/padding";
import { onboardingStepThree } from "../../../store/auth/actions";
import { selectUser, setRegisterProgress } from "../../../store/auth/reducer";
import { getNewsFeedTypes } from "../../../store/misc/actions";
import {
  selectLoading as selectNewsFeedTypesLoading,
  selectNewsFeedTypes,
} from "../../../store/misc/reducer";

const CustomizeYourNewsFeedScreen = ({ navigation }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const newsFeedTypes = useSelector(selectNewsFeedTypes);
  const newsFeedTypesLoading = useSelector(selectNewsFeedTypesLoading);
  const currentUser = useSelector(selectUser);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(setRegisterProgress(0.4));

      dispatch(getNewsFeedTypes());
      return () => {};
    }, [dispatch]),
  );

  useEffect(() => {
    if (currentUser) {
      setSelectedInterests(currentUser.newsFeedTypes);
    }
  }, [currentUser]);

  const onContinue = () => {
    if (selectedInterests.length === 0) {
      Toast.show("Please select at least one interest", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
      });

      return;
    }

    const newsFeedTypeIds = selectedInterests.map((interest) => interest.id);

    dispatch(onboardingStepThree({ newsFeedTypeIds })).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigation.navigate("FollowPublishers");
      }
    });
  };

  const InterestItem = ({ interest }) => {
    const onSwitchSelectedInterest = () => {
      if (selectedInterests.some((item) => item.name === interest.name)) {
        return {
          borderColor: THEME_COLORS.primary,
        };
      }

      return {
        borderColor: COLOR_GREY_SCALE[300],
      };
    };

    const onFollowInterest = () => {
      if (selectedInterests.some((item) => item.name === interest.name)) {
        setSelectedInterests(
          selectedInterests.filter((item) => item.name !== interest.name),
        );
      } else {
        setSelectedInterests([...selectedInterests, interest]);
      }
    };

    return (
      <TouchableOpacity
        style={[styles.interestItem, onSwitchSelectedInterest()]}
        onPress={onFollowInterest}
      >
        <View>
          <Text style={styles.iconSize}>{interest.icon}</Text>
        </View>
        <View>
          <Text size="medium">{interest.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Screen continueText="Create Account" onContinueHandler={onContinue}>
      <View>
        <HeaderTitle
          title="Customize your news   feed 🌟"
          description="Tell us what you're interested in to tailor your news experience. Don't worry, you can always update your preferences later."
        />
        <NewsFeedTypesSkeleton loading={newsFeedTypesLoading} />
        {!newsFeedTypesLoading && (
          <View style={{ marginTop: PADDING[24] }}>
            <View style={styles.interestContainer}>
              {newsFeedTypes.map((interest) => (
                <InterestItem key={interest.id} interest={interest} />
              ))}
            </View>
          </View>
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  iconSize: {
    fontSize: 48,
    lineHeight: 60,
  },
  interestContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  interestItem: {
    width: "30%",
    padding: 10,
    borderWidth: 2,
    borderColor: COLOR_GREY_SCALE[300],
    borderStyle: "solid",
    borderRadius: BORDER_RADIUS[12],
    flexDirection: "column",
    alignItems: "center",
  },
});

export default CustomizeYourNewsFeedScreen;
