import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";

import authReducer from "./auth/reducer";
import miscReducer from "./misc/reducer";
import postReducer from "./post/reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  misc: miscReducer,
  post: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
