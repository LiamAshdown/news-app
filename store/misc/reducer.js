import { createSlice } from "@reduxjs/toolkit";

import { getCountries, getNewsFeedTypes, getPublishers } from "./actions";

const miscSlice = createSlice({
  name: "misc",
  initialState: {
    blurActive: false,
    bottomSheetModal: {
      present: false,
      type: "",
    },
    countries: [],
    newsFeedTypes: [],
    publishers: [],
    loading: false,
  },
  reducers: {
    setBlurActive(state, action) {
      state.blurActive = action.payload;
    },
    setBottomSheetModal(state, action) {
      state.bottomSheetModal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.loading = false;
      })
      .addCase(getCountries.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.countries = [];
        state.loading = false;
      })
      .addCase(getNewsFeedTypes.fulfilled, (state, action) => {
        state.newsFeedTypes = action.payload;
        state.loading = false;
      })
      .addCase(getNewsFeedTypes.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getNewsFeedTypes.rejected, (state, action) => {
        state.newsFeedTypes = [];
        state.loading = false;
      })
      .addCase(getPublishers.fulfilled, (state, action) => {
        state.publishers = action.payload;
        state.loading = false;
      })
      .addCase(getPublishers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPublishers.rejected, (state, action) => {
        state.publishers = [];
        state.loading = false;
      });
  },
});

export const { setBlurActive, setBottomSheetModal } = miscSlice.actions;
export const isBlurActive = (state) => state.misc.blurActive;
export const getBottomSheetModal = (state) => state.misc.bottomSheetModal;
export const selectCountries = (state) => state.misc.countries;
export const selectLoading = (state) => state.misc.loading;
export const selectNewsFeedTypes = (state) => state.misc.newsFeedTypes;
export const selectPublishers = (state) => state.misc.publishers;
export default miscSlice.reducer;
