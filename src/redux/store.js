import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { statisticsApi } from "./slice/statisticsSlice";
// import counterReducer from "../features/counter/counterSlice";
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  statisticsApi.middleware,
];

export const store = configureStore({
  reducer: {
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    // counter: counterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
