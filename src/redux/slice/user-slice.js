import { createSlice } from "@reduxjs/toolkit";
// import operation from "./auth-operation";
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshCurrentUser: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [operation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [operation.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [operation.fetchCurrentUser.pending](state, _) {
      state.isRefreshCurrentUser = true;
    },
    [operation.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshCurrentUser = false;
    },
    [operation.fetchCurrentUser.rejected](state, _) {
      state.isRefreshCurrentUser = false;
    },
  },
});
export default authSlice.reducer;
