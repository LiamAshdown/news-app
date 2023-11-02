import { createStackNavigator } from "@react-navigation/stack";

import HomeHeader from "../components/navigations/Home";
import HomeNotificaton from "../components/navigations/HomeNotification";
import { THEME_COLORS } from "../constants/colors";
import HomeScreen from "../screens/logged-in/HomeScreen";

const Stack = createStackNavigator();

const LoggedInNavigator = () => {
  return (
    <Stack.Navigator
      name="LoggedIn"
      screenOptions={{
        headerLeft: HomeHeader,
        headerRight: HomeNotificaton,
        headerTitle: "",
        headerStyle: {
          shadowColor: "transparent",
          elevation: 0,
          backgroundColor: THEME_COLORS.white,
          height: 150,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default LoggedInNavigator;
