import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Hero from "../../components/onboarding/Hero";
import Section from "../../components/onboarding/Section";

const Screen = ({ title, description, imageSrc, onContinue, step }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <Hero imageSrc={imageSrc} />
          <Section
            title={title}
            description={description}
            onContinue={onContinue}
            step={step}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 24,
  },
});

export default Screen;
