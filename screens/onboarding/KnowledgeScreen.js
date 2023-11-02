import Screen from "../../components/onboarding/Screen";

const KnowledgeScreen = () => {
  return (
    <Screen
      title="Be a Knowledgeable Global Citizen"
      description="Unlock a personalized news experience that matches your interests and preferences. Your news, your way!"
      imageSrc={require("../../assets/onboarding/knowledge.png")}
      step={2}
    />
  );
};

export default KnowledgeScreen;
