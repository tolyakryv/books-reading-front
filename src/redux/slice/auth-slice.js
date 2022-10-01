import { createSlice } from "@reduxjs/toolkit";
import operation from "../operation/auth-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: true,

  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [operation.register.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [operation.register.fulfilled](state, action) {
      state.isLoading = false;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operation.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [operation.logIn.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [operation.logIn.fulfilled](state, action) {
      state.isLoading = false;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operation.logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [operation.logOut.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [operation.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [operation.logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [operation.google.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [operation.google.fulfilled](state, action) {
      state.isLoading = false;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operation.google.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
