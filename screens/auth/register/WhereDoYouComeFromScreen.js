import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  ViewBase,
  ScrollView,
} from "react-native";

import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Screen from "../../../components/auth/register/Screen";
import Input from "../../../components/form/Input";
import Australia from "../../../components/svg/countries/Australia";
import Belgium from "../../../components/svg/countries/Belgium";
import Brazil from "../../../components/svg/countries/Brazil";
import Canada from "../../../components/svg/countries/Canada";
import China from "../../../components/svg/countries/China";
import Germany from "../../../components/svg/countries/Germany";
import UK from "../../../components/svg/countries/UK";
import Text from "../../../components/typography/Text";
import {
  COLOR_GREY_SCALE,
  SURFACE_LIGHT_DARK_LIGHT,
  THEME_COLORS,
} from "../../../constants/colors";
import { BORDER_RADIUS, PADDING } from "../../../constants/padding";

const countries = [
  {
    Icon: UK,
    text: "United Kingdom",
  },
  {
    Icon: Australia,
    text: "Australia",
  },
  {
    Icon: Brazil,
    text: "Brazil",
  },
  {
    Icon: Canada,
    text: "Canada",
  },
  {
    Icon: China,
    text: "China",
  },
  {
    Icon: Germany,
    text: "Germany",
  },
  {
    Icon: Belgium,
    text: "Beglium",
  },
];

const WhereDoYouComeFromScreen = ({ navigation }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryInput, setCountryInput] = useState("");

  console.log(countryInput);

  const filterByCountryInput = (item) => {
    if (countryInput.length > 0) {
      if (selectedCountry && selectedCountry.text === item.text) {
        return true;
      }

      return item.text.toLowerCase().includes(countryInput.toLowerCase());
    }

    return true;
  };

  const CountryItem = ({ Icon, text, onSelect }) => {
    const onSwitchSelectedCountry = () => {
      if (selectedCountry && selectedCountry.text === text) {
        return {
          borderColor: THEME_COLORS.primary,
        };
      }
    };

    return (
      <TouchableOpacity
        style={[styles.countryItem, onSwitchSelectedCountry()]}
        onPress={onSelect}
      >
        <View>
          <Icon />
        </View>
        <View>
          <Text bold>{text}</Text>
        </View>
        {selectedCountry && selectedCountry.text === text && (
          <View style={{ marginLeft: "auto" }}>
            <Ionicons name="checkmark" size={24} color={THEME_COLORS.primary} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const onContinue = () => {
    navigation.navigate("CustomizeYourNewsFeed");
  };

  return (
    <Screen continueText="Create Account" onContinueHandler={onContinue}>
      <View>
        <HeaderTitle
          title="Where do you come   from? 🗺️"
          description="Select your country of origin. This will help us to make the best recommendations for you."
        />

        <View style={{ marginTop: PADDING[24] }}>
          <Input
            placeholder="Search Country"
            iconName="search"
            onChange={setCountryInput}
          />
          <View style={styles.countryList}>
            {countries.filter(filterByCountryInput).map((country) => (
              <CountryItem
                key={country.text}
                Icon={country.Icon}
                text={country.text}
                onSelect={() => setSelectedCountry(country)}
              />
            ))}
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  countryList: {
    marginTop: PADDING[16],
  },
  countryItem: {
    borderWidth: 1,
    borderColor: COLOR_GREY_SCALE[300],
    borderStyle: "solid",
    borderRadius: BORDER_RADIUS[8],
    padding: PADDING[16],
    flexDirection: "row",
    alignItems: "center",
    gap: PADDING[16],
    backgroundColor: SURFACE_LIGHT_DARK_LIGHT[3],
    marginBottom: PADDING[16],
  },
});

export default WhereDoYouComeFromScreen;
