import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "misc",
  initialState: {
    blurActive: false,
    bottomSheetModal: {
      present: false,
      type: "",
    },
  },
  reducers: {
    setBlurActive(state, action) {
      state.blurActive = action.payload;
    },
    setBottomSheetModal(state, action) {
      state.bottomSheetModal = action.payload;
    },
  },
});

export const { setBlurActive, setBottomSheetModal } = authSlice.actions;
export const isBlurActive = (state) => state.misc.blurActive;
export const getBottomSheetModal = (state) => state.misc.bottomSheetModal;
export default authSlice.reducer;
