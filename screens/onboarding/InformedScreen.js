import Screen from "../../components/onboarding/Screen";

const InformedScreen = ({ navigation }) => {
  const onContinue = () => {
    navigation.navigate("Onboarding Knowledge");
  };
  return (
    <Screen
      title="Stay Informed, Anytime, Anywhere"
      description="Welcome to our news app, your go-to source for breaking news, exclusive stories, and personalized content."
      imageSrc={require("../../assets/onboarding/inform.png")}
      onContinue={onContinue}
      step={1}
    />
  );
};

export default InformedScreen;
