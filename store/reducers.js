import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./auth/reducer";
import miscReducer from "./misc/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  misc: miscReducer,
});

export default rootReducer;
