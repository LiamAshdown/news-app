import { createSlice } from "@reduxjs/toolkit";

import {
  onboardingStepFive,
  onboardingStepFour,
  onboardingStepOne,
  onboardingStepSix,
  onboardingStepTwo,
  getProfile,
  refreshToken,
  updateNewsFeed,
  updateNotifications,
  login,
} from "./actions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    registerProgress: 0,
    user: null,
    token: null,
    refreshToken: null,
    expiresAt: null,
    loading: false,
    errors: null,
  },
  reducers: {
    setRegisterProgress(state, action) {
      state.registerProgress = action.payload;
    },
    logout(state) {
      state.registerProgress = 0;
      state.user = {
        id: null,
        email: null,
        username: null,
        fullName: null,
        gravatarUrl: null,
      };
      state.token = null;
      state.refreshToken = null;
      state.loading = false;
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(onboardingStepOne.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(onboardingStepOne.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refresh_token;
        state.expiresAt = action.payload.expires_at;
      })
      .addCase(onboardingStepOne.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(onboardingStepTwo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(onboardingStepTwo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(onboardingStepTwo.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(onboardingStepFour.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(onboardingStepFour.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(onboardingStepFour.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(onboardingStepFive.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(onboardingStepFive.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(onboardingStepFive.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(onboardingStepSix.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(onboardingStepSix.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(onboardingStepSix.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(getProfile.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(updateNewsFeed.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateNewsFeed.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(updateNewsFeed.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(updateNotifications.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(updateNotifications.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(refreshToken.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload.errors;
      });
  },
});

const isLoggedIn = (state) => {
  const token = state.auth.token;
  const user = state.auth.user;

  if (!token || !user) {
    return false;
  }

  if (user.step === "COMPLETE") {
    return true;
  }

  return false;
};

export const { setRegisterProgress, logout } = authSlice.actions;
export const selectRegisterProgress = (state) => state.auth.registerProgress;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectLoading = (state) => state.auth.loading;
export const selectErrors = (state) => state.auth.errors;
export const selectIsLoggedIn = (state) => isLoggedIn(state);
export default authSlice.reducer;
