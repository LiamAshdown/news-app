import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

import HomeHeader from "../components/navigations/Home";
import HomeNotificaton from "../components/navigations/HomeNotification";
import ViewPostHeader from "../components/navigations/ViewPostHeader";
import Logo from "../components/svg/Logo";
import Text from "../components/typography/Text";
import { COLOR_GREY_SCALE, THEME_COLORS } from "../constants/colors";
import { FONT_FAMILY_URBANIST } from "../constants/font";
import { PADDING } from "../constants/padding";
import { BODY_FONT_SIZES, HEADER_FONT_SIZES } from "../constants/typography";
import BookmarkScreen from "../screens/logged-in/BookmarkScreen";
import CommentsScreen from "../screens/logged-in/CommentsScreen";
import DiscoverScreen from "../screens/logged-in/DiscoverScreen";
import HomeScreen from "../screens/logged-in/HomeScreen";
import NotificationScreen from "../screens/logged-in/NotificationScreen";
import ProfileScreen from "../screens/logged-in/ProfileScreen";
import RecentStoriesScreen from "../screens/logged-in/RecentStoriesScreen";
import TrendingScreen from "../screens/logged-in/TrendingScreen";
import ViewAuthorPublisherScreen from "../screens/logged-in/ViewAuthorPublisherScreen";
import ViewPostScreen from "../screens/logged-in/ViewPostScreen";
import CreatePostScreen from "../screens/logged-in/create-post/CreatePostScreen";

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
      component={DiscoverScreen}
      options={{
        headerTitle: "Discover",
        tabBarLabel: "Discover",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 125,
        },
        headerLeftContainerStyle: {
          paddingLeft: PADDING[16],
        },
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h5,
        },
        headerLeft: () => {
          return <Logo width={26} height={26} />;
        },
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
    <Tab.Screen
      name="Bookmark"
      component={BookmarkScreen}
      options={{
        headerTitle: "Bookmark",
        tabBarLabel: "Bookmark",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bookmark" color={color} size={size} />
        ),
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 125,
        },
        headerLeftContainerStyle: {
          paddingLeft: PADDING[16],
        },
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h5,
        },
        headerLeft: () => {
          return <Logo width={26} height={26} />;
        },
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
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerTitle: "Profile",
        tabBarLabel: "Profile",
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h5,
        },
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
        headerRight: ViewPostHeader,
      }}
    />
    <Stack.Screen
      name="Comments"
      component={CommentsScreen}
      options={{
        headerTitle: "Comments (3.2K)",
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 125,
        },
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h6,
        },
        headerTintColor: THEME_COLORS.black,
        headerLeftLabelVisible: false,
      }}
    />
    <Stack.Screen
      name="ViewAuthorPublisher"
      component={ViewAuthorPublisherScreen}
      options={{
        headerTitle: "",
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 125,
        },
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h6,
        },
        headerTintColor: THEME_COLORS.black,
        headerLeftLabelVisible: false,
        headerRight: () => (
          <View style={{ flexDirection: "row" }}>
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
    <Stack.Screen
      name="CreatePost"
      component={CreatePostScreen}
      options={({ navigation }) => ({
        headerTitle: "Write Stories",
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 125,
        },
        headerTitleStyle: {
          fontFamily: FONT_FAMILY_URBANIST.bold,
          fontSize: HEADER_FONT_SIZES.h6,
        },
        headerRight: () => {
          const onPreview = () => {
            navigation.navigate("ViewPost");
          };

          return (
            <Text
              style={{
                marginRight: PADDING[12],
              }}
              color={THEME_COLORS.primary}
              onPress={onPreview}
              bold
            >
              Preview
            </Text>
          );
        },
        headerTintColor: THEME_COLORS.black,
        headerLeftLabelVisible: false,
      })}
    />
  </Stack.Navigator>
);

export default LoggedInNavigator;
