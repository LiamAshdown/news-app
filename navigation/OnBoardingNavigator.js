import { createStackNavigator } from "@react-navigation/stack";

import ElevateScreen from "../screens/onboarding/ElevateScreen";
import InformedScreen from "../screens/onboarding/InformedScreen";
import KnowledgeScreen from "../screens/onboarding/KnowledgeScreen";

const Stack = createStackNavigator();

const OnBoardingNavigator = () => {
  return (
    <Stack.Navigator
      name="Onboarding"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding Inform" component={InformedScreen} />
      <Stack.Screen name="Onboarding Knowledge" component={KnowledgeScreen} />
      <Stack.Screen name="Onboarding Elevate" component={ElevateScreen} />
    </Stack.Navigator>
  );
};

export default OnBoardingNavigator;
