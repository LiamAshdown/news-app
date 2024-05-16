import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api";

export const onboardingStepOne = createAsyncThunk(
  "auth/onboardingStepOne",
  async (data, { rejectWithValue }) => {
    try {
      api.setToken(null);
      const response = await api.auth.onboardingStepOne(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const onboardingStepTwo = createAsyncThunk(
  "auth/onboardingStepTwo",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.auth.onboardingStepTwo(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const onboardingStepThree = createAsyncThunk(
  "auth/onboardingStepThree",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.auth.onboardingStepThree(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const onboardingStepFour = createAsyncThunk(
  "auth/onboardingStepFour",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.auth.onboardingStepFour(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const onboardingStepFive = createAsyncThunk(
  "auth/onboardingStepFive",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.auth.onboardingStepFive(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const onboardingStepSix = createAsyncThunk(
  "auth/onboardingStepSix",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.auth.onboardingStepSix(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.profile.profile();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateNewsFeed = createAsyncThunk(
  "auth/updateNewsFeed",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.profile.updateNewsFeed(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const updateNotifications = createAsyncThunk(
  "auth/updateNotifications",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.profile.updateNotifications(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.auth.login(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, { rejectWithValue, getState }) => {
    try {
      if (getState().auth.refreshToken === null) {
        return rejectWithValue("No refresh token found");
      }

      const response = await api.auth.refreshToken(
        getState().auth.refreshToken,
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
