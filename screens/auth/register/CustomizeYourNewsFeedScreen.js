import { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Screen from "../../../components/auth/register/Screen";
import Text from "../../../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../../../constants/colors";
import { BORDER_RADIUS, PADDING } from "../../../constants/padding";

const interests = [
  {
    name: "Politics",
    icon: "🚀",
  },
  {
    name: "Business",
    icon: "📈",
  },
  {
    name: "Technology",
    icon: "👩‍💻",
  },
  {
    name: "Entertainment",
    icon: "🎬",
  },
  {
    name: "Sports",
    icon: "⚽️",
  },
  {
    name: "Science",
    icon: "🧬",
  },
  {
    name: "Health",
    icon: "🏥",
  },
  {
    name: "Fashion",
    icon: "👗",
  },
  {
    name: "Travel",
    icon: "🧳",
  },
];

const CustomizeYourNewsFeedScreen = ({ navigation }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const onContinue = () => {
    navigation.navigate("FollowPublishers");
  };

  const InterestItem = ({ name, icon }) => {
    const onSwitchSelectedInterest = () => {
      if (selectedInterests.includes(name)) {
        return {
          borderColor: THEME_COLORS.primary,
        };
      }

      return {
        borderColor: COLOR_GREY_SCALE[300],
      };
    };

    return (
      <TouchableOpacity
        style={[styles.interestItem, onSwitchSelectedInterest()]}
        onPress={() => {
          if (selectedInterests.includes(name)) {
            setSelectedInterests(
              selectedInterests.filter((interest) => interest !== name),
            );
          } else {
            setSelectedInterests([...selectedInterests, name]);
          }
        }}
      >
        <View>
          <Text style={styles.iconSize}>{icon}</Text>
        </View>
        <View>
          <Text size="medium">{name}</Text>
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
        <View style={{ marginTop: PADDING[24] }}>
          <View style={styles.interestContainer}>
            {interests.map((interest) => (
              <InterestItem
                key={interest.name}
                name={interest.name}
                icon={interest.icon}
              />
            ))}
          </View>
        </View>
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
