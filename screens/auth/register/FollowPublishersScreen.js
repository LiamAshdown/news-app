import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import api from "../../../api";
import Button from "../../../components/Button";
import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import PublisherSkeleton from "../../../components/skeletons/PublisherSkeleton";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";
import { onboardingStepFour } from "../../../store/auth/actions";
import { selectUser, setRegisterProgress } from "../../../store/auth/reducer";
import { getPublishers } from "../../../store/misc/actions";
import {
  selectLoading as publisherSelectLoading,
  selectPublishers,
} from "../../../store/misc/reducer";

const FollowPublishersScreen = ({ navigation }) => {
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const publisherLoading = useSelector(publisherSelectLoading);
  const publishers = useSelector(selectPublishers);
  const currentUser = useSelector(selectUser);

  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(setRegisterProgress(0.6));

      dispatch(getPublishers());
      return () => {};
    }, [dispatch]),
  );

  useEffect(() => {
    if (currentUser) {
      setSelectedPublishers(currentUser.publisherFollows);
    }
  }, [currentUser]);

  const onContinue = () => {
    const publisherIds = selectedPublishers.map((publisher) => publisher.id);
    dispatch(onboardingStepFour({ publisherIds })).then((response) => {
      if (response.meta.requestStatus === "fulfilled") {
        navigation.navigate("EnableNotifications");
      }
    });
  };

  const PublisherItem = ({ publisher, imageSrc }) => {
    const onFollowPublisher = () => {
      if (selectedPublishers.some((item) => item.name === publisher.name)) {
        setSelectedPublishers(
          selectedPublishers.filter((item) => item.name !== publisher.name),
        );
      } else {
        setSelectedPublishers([...selectedPublishers, publisher]);
      }
    };

    const publisherIsSelected = selectedPublishers.some(
      (item) => item.name === publisher.name,
    );

    // const publisherIsSelected = selectedPublishers.
    const isLastChild =
      publisher.name === publishers[publishers.length - 1].name;

    return (
      <View
        style={[
          styles.publisherItem,
          isLastChild && styles.publisherItemLastChild,
        ]}
      >
        <View style={styles.publisherItemLogoText}>
          <View>
            <Image source={imageSrc} />
          </View>
          <View>
            <Text bold>{publisher.name}</Text>
          </View>
        </View>
        <View>
          <View>
            <Button
              rounded
              size="small"
              onPressHandler={onFollowPublisher}
              variant={publisherIsSelected ? "white" : "primary"}
            >
              {publisherIsSelected ? "Following" : "Follow"}
            </Button>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Screen continueText="Continue" onContinueHandler={onContinue}>
      <View>
        <HeaderTitle
          title="Follow some official publishers ❤️"
          description="Follow some official publishers that you may know and like to get updates on their stories."
        />
        <PublisherSkeleton loading={publisherLoading} />
        {!publisherLoading && (
          <View style={{ marginTop: PADDING[24] }}>
            {publishers.map((publisher) => (
              <PublisherItem
                key={publisher.id}
                publisher={publisher}
                imageSrc={require("../../../assets/publishers/new-york-times.png")}
              />
            ))}
          </View>
        )}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  publisherItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: PADDING[16],
    borderBottomWidth: 1,
    borderColor: COLOR_GREY_SCALE[300],
    borderStyle: "solid",
  },
  publisherItemLogoText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  publisherItemLastChild: {
    borderBottomWidth: 0,
  },
});

export default FollowPublishersScreen;
