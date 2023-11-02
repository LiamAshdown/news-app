import { HeaderBackButton } from "@react-navigation/elements";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

import { SURFACE_LIGHT_DARK_LIGHT, THEME_COLORS } from "../constants/colors";
import LandingScreen from "../screens/auth/LandingScreen";
import AdditionalDetailsScreen from "../screens/auth/register/AdditionalDetailsScreen";
import CreateAccountScreen from "../screens/auth/register/CreateAccountScreen";
import CustomizeYourNewsFeedScreen from "../screens/auth/register/CustomizeYourNewsFeedScreen";
import EnableNotificationsScreen from "../screens/auth/register/EnableNotificationsScreen";
import FollowPublishersScreen from "../screens/auth/register/FollowPublishersScreen";
import WhereDoYouComeFromScreen from "../screens/auth/register/WhereDoYouComeFromScreen";

const Stack = createStackNavigator();

const CustomProgressBar = ({ progress }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  const width = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View
      style={{
        flexDirection: "row",
        height: 20,
        width: "100%",
        backgroundColor: SURFACE_LIGHT_DARK_LIGHT[7],
        borderRadius: "50%",
      }}
    >
      <Animated.View
        style={{
          flex: width,
          backgroundColor: THEME_COLORS.primary,
          borderRadius: "50%",
        }}
      />
    </View>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      name="Auth"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          headerShown: true,
          headerTitle: "",
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ),
          headerStyle: {
            shadowColor: "transparent",
            elevation: 0,
            backgroundColor: THEME_COLORS.white,
          },
          headerTintColor: THEME_COLORS.black,
          headerLeftLabelVisible: false,
        })}
      >
        <Stack.Screen name="Register" component={CreateAccountScreen} />
        <Stack.Group
          screenOptions={({ navigation }) => ({
            headerShown: true,
            headerTitle: "",
            headerLeft: (props) => {
              console.log(navigation.getCurrentOptions());

              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <HeaderBackButton
                    {...props}
                    onPress={() => navigation.goBack()}
                  />

                  <CustomProgressBar progress={0.5} />
                </View>
              );
            },
            headerStyle: {
              shadowColor: "transparent",
              elevation: 0,
              backgroundColor: THEME_COLORS.white,
            },
            headerTintColor: THEME_COLORS.black,
            headerLeftLabelVisible: false,
          })}
        >
          <Stack.Screen
            name="WhereDoYouComeFrom"
            component={WhereDoYouComeFromScreen}
          />
          <Stack.Screen
            name="CustomizeYourNewsFeed"
            component={CustomizeYourNewsFeedScreen}
          />
          <Stack.Screen
            name="FollowPublishers"
            component={FollowPublishersScreen}
          />
          <Stack.Screen
            name="EnableNotifications"
            component={EnableNotificationsScreen}
          />
          <Stack.Screen
            name="AdditionalDetails"
            component={AdditionalDetailsScreen}
          />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
