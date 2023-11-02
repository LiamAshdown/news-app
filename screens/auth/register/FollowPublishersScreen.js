import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

import Button from "../../../components/Button";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Screen from "../../../components/auth/register/Screen";
import Checkbox from "../../../components/form/Checkbox";
import Input from "../../../components/form/Input";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { PADDING } from "../../../constants/padding";

const publishers = [
  {
    name: "New York Times",
    imageSrc: require("../../../assets/publishers/new-york-times.png"),
  },
  {
    name: "BBC News",
    imageSrc: require("../../../assets/publishers/bbc.png"),
  },
  {
    name: "NBC News",
    imageSrc: require("../../../assets/publishers/nbc-news.png"),
  },
  {
    name: "USA Today",
    imageSrc: require("../../../assets/publishers/usa-today.png"),
  },
  {
    name: "CNN News",
    imageSrc: require("../../../assets/publishers/cnn.png"),
  },
];

const FollowPublishersScreen = ({ navigation }) => {
  const [selectedPublishers, setSelectedPublishers] = useState([]);

  const onContinue = () => {
    navigation.navigate("EnableNotifications");
  };

  const PublisherItem = ({ imageSrc, text }) => {
    const onFollowPublisher = () => {
      if (selectedPublishers.includes(text)) {
        setSelectedPublishers((prevSelectedPublishers) =>
          prevSelectedPublishers.filter((publisher) => publisher !== text),
        );
      } else {
        setSelectedPublishers((prevSelectedPublishers) => [
          ...prevSelectedPublishers,
          text,
        ]);
      }
    };

    const publisherIsSelected = selectedPublishers.includes(text);
    const isLastChild = text === publishers[publishers.length - 1].name;

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
            <Text bold>{text}</Text>
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
        <View style={{ marginTop: PADDING[24] }}>
          {publishers.map((publisher) => (
            <PublisherItem
              key={publisher.name}
              imageSrc={publisher.imageSrc}
              text={publisher.name}
            />
          ))}
        </View>
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
