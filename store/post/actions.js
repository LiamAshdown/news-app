import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api";

export const getPostTopics = createAsyncThunk(
  "post/topics",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.postTopic.index();
      return response.data;
    } catch (error) {
      console.log("error", error.response.data);
      alert("error");
      return rejectWithValue(error.response.data);
    }
  },
);

export const storePost = createAsyncThunk(
  "post/store",
  async (_, { rejectWithValue, getState }) => {
    try {
      const response = await api.post.store(getState().post.post);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);
