import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Screen from "../../../components/auth/Screen";
import HeaderTitle from "../../../components/auth/register/HeaderTitle";
import Input from "../../../components/form/Input";
import CountrySkeleton from "../../../components/skeletons/CountrySkeleton";
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
import { onboardingStepTwo } from "../../../store/auth/actions";
import {
  selectLoading,
  selectUser,
  setRegisterProgress,
} from "../../../store/auth/reducer";
import { getCountries } from "../../../store/misc/actions";
import {
  selectLoading as countrySelectLoading,
  selectCountries,
} from "../../../store/misc/reducer";

const countryIcons = {
  UK,
  AU: Australia,
  BR: Brazil,
  CA: Canada,
  CN: China,
  DE: Germany,
  BE: Belgium,
};

const WhereDoYouComeFromScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const countryLoading = useSelector(countrySelectLoading);
  const countries = useSelector(selectCountries);
  const currentUser = useSelector(selectUser);

  console.log("user", currentUser);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryInput, setCountryInput] = useState("");

  useFocusEffect(
    useCallback(() => {
      dispatch(setRegisterProgress(0.2));

      dispatch(getCountries());
      return () => {};
    }, [dispatch]),
  );

  useEffect(() => {
    if (countries.length > 0) {
      setSelectedCountry(currentUser.country || countries[0]);
    }
  }, [countries]);

  const filterByCountryInput = (item) => {
    if (countryInput.length > 0) {
      if (selectedCountry && selectedCountry.name === item.name) {
        return true;
      }

      return item.name.toLowerCase().includes(countryInput.toLowerCase());
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
        {selectedCountry && selectedCountry.name === text && (
          <View style={{ marginLeft: "auto" }}>
            <Ionicons name="checkmark" size={24} color={THEME_COLORS.primary} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const onContinue = () => {
    dispatch(onboardingStepTwo({ countryId: selectedCountry.id })).then(
      (response) => {
        if (response.meta.requestStatus === "fulfilled") {
          navigation.navigate("CustomizeYourNewsFeed");
        }
      },
    );
  };

  return (
    <Screen
      continueText="Create Account"
      onContinueHandler={onContinue}
      loading={loading}
    >
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
          <CountrySkeleton loading={countryLoading} />
          {!countryLoading && countries.length > 0 && (
            <View style={styles.countryList}>
              {countries.filter(filterByCountryInput).map((country) => (
                <CountryItem
                  key={country.code}
                  Icon={countryIcons[country.code]}
                  text={country.name}
                  onSelect={() => setSelectedCountry(country)}
                />
              ))}
            </View>
          )}
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
