import { CommonActions } from "@react-navigation/native";

import Screen from "../../components/onboarding/Screen";

const ElevateScreen = ({ navigation }) => {
  const onContinue = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: "Auth", Screen: "Landing" }, // Name of the navigator you want to reset to
        ],
      }),
    );
  };

  return (
    <Screen
      title="Elevate Your News Experience Now!"
      description="Join our vibrant community of news enthusiasts. Share your thoughts, and engage in meaningful discussions."
      imageSrc={require("../../assets/onboarding/elevate.png")}
      onContinue={onContinue}
      step={3}
    />
  );
};

export default ElevateScreen;
