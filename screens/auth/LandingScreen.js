import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../components/Button";
import Logo from "../../components/svg/Logo";
import Header from "../../components/typography/Header";
import Text from "../../components/typography/Text";
import { THEME_COLORS } from "../../constants/colors";

const LandingScreen = ({ navigation }) => {
  const signInWithPassword = () => {
    navigation.navigate("SignIn");
  };

  const signUp = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: THEME_COLORS.white, height: "100%" }}
    >
      <ScrollView>
        <View style={{ padding: 24 }}>
          <View style={styles.logoContainer}>
            <Logo />
          </View>
          <View style={styles.header}>
            <Header size="large" style={styles.headerTitle}>
              Newsline
            </Header>
            <Text style={styles.headerText}>
              Welcome! Lets dive in into your account!
            </Text>
          </View>
          <View style={styles.providers}>
            <Button variant="white" iconName="logo-google" rounded>
              Continue with Google
            </Button>
            <Button variant="white" iconName="logo-facebook" rounded>
              Continue with Facebook
            </Button>
            <Button variant="white" iconName="logo-apple" rounded>
              Continue with Apple
            </Button>
            <Button variant="white" iconName="logo-twitter" rounded>
              Continue with Twitter
            </Button>
          </View>
          <View style={styles.continueWithPassword}>
            <Button onPressHandler={signInWithPassword} rounded>
              Sign in with password
            </Button>
          </View>
          <View style={styles.dontHaveAccount}>
            <Text>Don't have an account?</Text>
            <Text color={styles.signUp.color} bold onPressHandler={signUp}>
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    gap: 20,
    marginBottom: 40,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  headerTitle: {
    textAlign: "center",
  },
  headerText: {
    textAlign: "center",
  },
  providers: {
    gap: 16,
  },
  dontHaveAccount: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 32,
  },
  continueWithPassword: {
    marginTop: 32,
  },
  signUp: {
    color: THEME_COLORS.primary,
  },
});

export default LandingScreen;
