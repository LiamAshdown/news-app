import { HeaderBackButton } from "@react-navigation/elements";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { SURFACE_LIGHT_DARK_LIGHT, THEME_COLORS } from "../constants/colors";
import LandingScreen from "../screens/auth/LandingScreen";
import AdditionalDetailsScreen from "../screens/auth/register/AdditionalDetailsScreen";
import CreateAccountScreen from "../screens/auth/register/CreateAccountScreen";
import CustomizeYourNewsFeedScreen from "../screens/auth/register/CustomizeYourNewsFeedScreen";
import EnableNotificationsScreen from "../screens/auth/register/EnableNotificationsScreen";
import FollowPublishersScreen from "../screens/auth/register/FollowPublishersScreen";
import SuccessScreen from "../screens/auth/register/SuccessScreen";
import WhereDoYouComeFromScreen from "../screens/auth/register/WhereDoYouComeFromScreen";
import SignInScreen from "../screens/auth/sign-in/SignInScreen";
import { selectRegisterProgress } from "../store/auth/reducer";

const Stack = createStackNavigator();

const CustomProgressBar = () => {
  const progress = useSelector(selectRegisterProgress);

  return (
    <View
      style={{
        flexDirection: "row",
        height: 20,
        width: 200,
        marginLeft: 25,
        backgroundColor: SURFACE_LIGHT_DARK_LIGHT[7],
        borderRadius: 50,
        transform: [{ translateX: -20 }],
      }}
    >
      <View
        style={{
          flex: progress,
          backgroundColor: THEME_COLORS.primary,
          borderRadius: 50,
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
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Group
          screenOptions={({ navigation }) => ({
            headerShown: true,
            headerTitle: "",
            headerLeft: (props) => {
              return (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <HeaderBackButton
                    {...props}
                    onPress={() => navigation.goBack()}
                  />

                  <CustomProgressBar />
                </View>
              );
            },
            headerStyle: {
              shadowColor: "transparent",
              elevation: 0,
              backgroundColor: THEME_COLORS.white,
            },
            animationEnabled: false,
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
        <Stack.Group>
          <Stack.Screen name="Success" component={SuccessScreen} />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
