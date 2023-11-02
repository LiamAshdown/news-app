import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Hero from "../../components/onboarding/Hero";
import Section from "../../components/onboarding/Section";

const Screen = ({ title, description, imageSrc, onContinue, onSkip, step }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <Hero imageSrc={imageSrc} />
          <Section
            title={title}
            description={description}
            onContinue={onContinue}
            onSkip={onSkip}
            step={step}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 24,
  },
});

export default Screen;
