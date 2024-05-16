import { useNavigation } from "@react-navigation/native";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from "redux-persist";

import { refreshToken } from "./auth/actions";
import { logout } from "./auth/reducer";
import rootReducer from "./reducers";
import api from "../api";

const refreshTokenMiddleware = (storeAPI) => (next) => (action) => {
  // const navigation = useNavigation();

  if (action.type.endsWith("/rejected")) {
    if (action.type !== refreshToken.rejected.type) {
      storeAPI.dispatch(refreshToken());
    } else {
      storeAPI.dispatch(logout());
    }
  }

  return next(action);
};

const addAccessTokenMiddleware = (storeAPI) => (next) => (action) => {
  const state = storeAPI.getState();
  const accessToken = state.auth.token;

  if (accessToken) {
    api.setToken(accessToken);
  } else {
    api.setToken(null);
  }

  return next(action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(refreshTokenMiddleware, addAccessTokenMiddleware),
});

export const persistor = persistStore(store);

export default { store, persistor };
