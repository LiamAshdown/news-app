import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MenuProvider } from "react-native-popup-menu";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Screen } from "./Screen";
import { store, persistor } from "./store/store";

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
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <RootSiblingParent>
            <BottomSheetModalProvider>
              <MenuProvider
                customStyles={{
                  menuProviderWrapper: {
                    borderRadius: 8,
                    backgroundColor: "red",
                  },
                  backdrop: {
                    backgroundColor: "red",
                  },
                }}
              >
                <View style={styles.container} onLayout={onLayoutRootView}>
                  <Screen />
                </View>
              </MenuProvider>
            </BottomSheetModalProvider>
          </RootSiblingParent>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuContainer: {
    backgroundColor: "red",
  },
});
