import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import HomeHeader from "../components/navigations/Home";
import HomeNotificaton from "../components/navigations/HomeNotification";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../constants/colors";
import { FONT_FAMILY_URBANIST } from "../constants/font";
import { PADDING } from "../constants/padding";
import { BODY_FONT_SIZES, HEADER_FONT_SIZES } from "../constants/typography";
import HomeScreen from "../screens/logged-in/HomeScreen";
import NotificationScreen from "../screens/logged-in/NotificationScreen";
import RecentStoriesScreen from "../screens/logged-in/RecentStoriesScreen";
import TrendingScreen from "../screens/logged-in/TrendingScreen";
import ViewPostScreen from "../screens/logged-in/ViewPostScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabStack = () => (
  <Tab.Navigator
    screenOptions={{
      headerTitle: "",
      tabBarLabelStyle: {
        color: COLOR_GREY_SCALE[500],
        fontFamily: FONT_FAMILY_URBANIST.semibold,
        fontSize: BODY_FONT_SIZES.medium,
      },
      tabBarActiveTintColor: THEME_COLORS.primary,
    }}
  >
    <Tab.Screen
      name="HomeScreenr"
      component={HomeScreen}
      options={({ navigation }) => ({
        headerLeft: HomeHeader,
        headerRight: () => <HomeNotificaton navigation={navigation} />,
        headerTitle: "",
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 125,
        },
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      })}
    />
    <Tab.Screen
      name="Discover"
      component={HomeScreen}
      options={{
        tabBarLabel: "Discover",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookmark"
      component={HomeScreen}
      options={{
        tabBarLabel: "Bookmark",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bookmark" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={HomeScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const LoggedInNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tabs"
      component={TabStack}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h6,
        },
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
        },
        headerTintColor: THEME_COLORS.black,
        headerLeftLabelVisible: false,
        headerRight: () => (
          <Ionicons
            name="settings-outline"
            size={28}
            color="black"
            style={{
              marginRight: PADDING[16],
            }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Trending"
      component={TrendingScreen}
      options={{
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h6,
        },
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
        },
        headerTintColor: THEME_COLORS.black,
        headerLeftLabelVisible: false,
        headerRight: () => (
          <Ionicons
            name="search-outline"
            size={28}
            color="black"
            style={{
              marginRight: PADDING[16],
            }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="RecentStories"
      component={RecentStoriesScreen}
      options={{
        title: "Recent Stories",
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h6,
        },
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
        },
        headerTintColor: THEME_COLORS.black,
        headerLeftLabelVisible: false,
        headerRight: () => (
          <Ionicons
            name="search-outline"
            size={28}
            color="black"
            style={{
              marginRight: PADDING[16],
            }}
          />
        ),
      }}
    />
    <Stack.Screen
      name="ViewPost"
      component={ViewPostScreen}
      options={{
        headerTitle: "",
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 125,
        },
        headerTintColor: THEME_COLORS.black,
        headerLeftLabelVisible: false,
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <Ionicons
              name="bookmark-outline"
              size={28}
              color="black"
              style={{
                marginRight: PADDING[16],
              }}
            />
            <Ionicons
              name="share-social-outline"
              size={28}
              color="black"
              style={{
                marginRight: PADDING[16],
              }}
            />
            <Ionicons
              name="ellipsis-vertical-outline"
              size={28}
              color="black"
              style={{
                marginRight: PADDING[16],
              }}
            />
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);

export default LoggedInNavigator;
