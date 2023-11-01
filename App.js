import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Dropdown from "./components/form/Dropdown";
import Input from "./components/form/Input";

export default function App() {
  useFonts({
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
  return (
    <View style={styles.container}>
      <Button shadow>Test</Button>
      <Button variant="white">Test</Button>
      <Button variant="black">Test</Button>
      <Button variant="outline-primary">Test</Button>
      <Input iconName="person-outline" placeholder="Username" secureTextEntry />
      <Input
        multiline
        feedback={{
          type: "error",
          message: "Error message",
        }}
      />
      <Input
        disable
        style={{
          marginTop: 20,
        }}
      />
      <Dropdown iconName="person-outline" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
