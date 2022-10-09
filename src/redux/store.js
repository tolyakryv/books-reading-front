import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import booksReducer from "./slice/books-slice";
import authReducer from "./slice/auth-slice";
import { bookAPI } from "../services/booksAPI";
import { trainingAPI } from "../services/trainingAPI";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const booksPersistConfig = {
  key: "books",
  storage,
};

export const store = configureStore({
  reducer: {
    books: persistReducer(booksPersistConfig, booksReducer),
    auth: persistReducer(authPersistConfig, authReducer),
    [bookAPI.reducerPath]: bookAPI.reducer,
    [trainingAPI.reducerPath]: trainingAPI.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    bookAPI.middleware,
    trainingAPI.middleware,
    logger,
  ],
});
export const persistor = persistStore(store);
