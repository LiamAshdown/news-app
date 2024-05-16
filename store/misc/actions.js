import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api";

export const getCountries = createAsyncThunk(
  "misc/countries",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.countries.index();
      return response.data.countries;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getNewsFeedTypes = createAsyncThunk(
  "misc/newsFeedTypes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.newsFeed.types();
      return response.data.newsFeedTypes;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const getPublishers = createAsyncThunk(
  "misc/publishers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.publishers.index();
      return response.data.publishers;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
