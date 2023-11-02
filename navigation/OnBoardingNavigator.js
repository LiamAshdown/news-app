import { createStackNavigator } from "@react-navigation/stack";

import { COLOR_GREY_SCALE } from "../constants/colors";
import InformedScreen from "../screens/onboarding/InformedScreen";
import KnowledgeScreen from "../screens/onboarding/KnowledgeScreen";

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding Inform" component={InformedScreen} />
      <Stack.Screen name="Onboarding Knowledge" component={KnowledgeScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
