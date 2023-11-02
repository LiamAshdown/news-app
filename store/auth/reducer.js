import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    registerProgress: 0,
  },
  reducers: {
    setRegisterProgress(state, action) {
      state.registerProgress = action.payload;
    },
  },
});

export const { setRegisterProgress } = authSlice.actions;
export const selectRegisterProgress = (state) => state.auth.registerProgress;
export default authSlice.reducer;
