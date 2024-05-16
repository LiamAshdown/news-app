import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import AuthNavigator from "./navigation/AuthNavigator";
import LoggedInNavigator from "./navigation/LoggedInNavigator";
import OnBoardingNavigator from "./navigation/OnBoardingNavigator";
import { selectIsLoggedIn } from "./store/auth/reducer";

const Stack = createStackNavigator();

export const Screen = () => {
  const navigationContainerRef = useRef();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    // navigationContainerRef.current.navigate("");
  }, [isLoggedIn]);

  return (
    <NavigationContainer ref={navigationContainerRef}>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          {!isLoggedIn && (
            <>
              <Stack.Screen name="Onboarding" component={OnBoardingNavigator} />
              <Stack.Screen name="Auth" component={AuthNavigator} />
            </>
          )}
          {isLoggedIn && (
            <Stack.Screen name="LoggedIn" component={LoggedInNavigator} />
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
