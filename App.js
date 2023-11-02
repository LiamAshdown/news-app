import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";

import AuthNavigator from "./navigation/AuthNavigator";
import LoggedInNavigator from "./navigation/LoggedInNavigator";
import OnBoardingNavigator from "./navigation/OnBoardingNavigator";
import store from "./store/store";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Urbanist-Medium": require("./assets/fonts/Urbanist-Medium.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "PlayfairDisplay-Bold": require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
    "PlayfairDisplay-Medium": require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    "PlayfairDisplay-Regular": require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    "PlayfairDisplay-SemiBold": require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    "RobotoFlex-Regular": require("./assets/fonts/RobotoFlex-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
              {/* <Stack.Screen name="Onboarding" component={OnBoardingNavigator} />
              <Stack.Screen name="Auth" component={AuthNavigator} /> */}
              <Stack.Screen name="LoggedIn" component={LoggedInNavigator} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
