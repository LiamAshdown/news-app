import { createSlice } from "@reduxjs/toolkit";

import { getPostTopics, storePost } from "./actions";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: null,
    postTopics: [],
    error: null,
    loading: false,
  },
  reducers: {
    setPost(state, action) {
      state.post = {
        ...state.post,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostTopics.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPostTopics.fulfilled, (state, action) => {
        state.postTopics = action.payload.postTopics;
        state.loading = false;

        console.log("state", state.postTopics);
        return state;
      })
      .addCase(getPostTopics.rejected, (state, action) => {
        state.postTopics = [];
        state.loading = false;
      })
      .addCase(storePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(storePost.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(storePost.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setPost } = postSlice.actions;
export const isLoading = (state) => state.post.loading;
export const selectPost = (state) => state.post.post;
export const selectPostTopics = (state) => state.post.postTopics;
export default postSlice.reducer;
