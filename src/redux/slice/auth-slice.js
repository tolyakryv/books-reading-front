import { createSlice } from "@reduxjs/toolkit";
import operation from "../operation/auth-operation";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,

  isLoading: false,
  isFetchingUser: false,
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
      state.isLoading = false;

      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [operation.logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [operation.currentUser.pending](state, _) {
      state.isLoading = true;
      state.isFetchingUser = true;
      state.error = null;
    },
    [operation.currentUser.fulfilled](state, action) {
      state.isLoading = false;
      state.isFetchingUser = false;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operation.currentUser.rejected](state, action) {
      state.isLoading = false;
      state.isFetchingUser = false;

      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
