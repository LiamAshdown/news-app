import client from "./client";

const prefix = "/auth";

const URL = {
  ONBOARDING_STEP_ONE: `${prefix}/onboarding/step-one`,
  ONBOARDING_STEP_TWO: `${prefix}/onboarding/step-two`,
  ONBOARDING_STEP_THREE: `${prefix}/onboarding/step-three`,
  ONBOARDING_STEP_FOUR: `${prefix}/onboarding/step-four`,
  ONBOARDING_STEP_FIVE: `${prefix}/onboarding/step-five`,
  ONBOARDING_STEP_SIX: `${prefix}/onboarding/step-six`,
  REFRESH_TOKEN: `token/refresh`,
  LOGIN: `${prefix}/login_check`,
};

export default {
  async onboardingStepOne(data) {
    const response = await client.post(URL.ONBOARDING_STEP_ONE, data);
    return response;
  },
  async onboardingStepTwo(data) {
    const response = await client.post(URL.ONBOARDING_STEP_TWO, data);
    return response;
  },
  async onboardingStepThree(data) {
    const response = await client.post(URL.ONBOARDING_STEP_THREE, data);
    return response;
  },
  async onboardingStepFour(data) {
    const response = await client.post(URL.ONBOARDING_STEP_FOUR, data);
    return response;
  },
  async onboardingStepFive(data) {
    const response = await client.post(URL.ONBOARDING_STEP_FIVE, data);
    return response;
  },
  async onboardingStepSix(data) {
    const response = await client.post(URL.ONBOARDING_STEP_SIX, data);
    return response;
  },
  async login(data) {
    const response = await client.post(URL.LOGIN, data);
    return response;
  },
  async refreshToken(refreshToken) {
    const response = await client.post(URL.REFRESH_TOKEN, {
      refresh_token: refreshToken,
    });
    return response;
  },
};
