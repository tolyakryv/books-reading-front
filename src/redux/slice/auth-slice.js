import { createSlice } from "@reduxjs/toolkit";
import operation from "../operation/auth-operation";
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [operation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operation.logOut.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
  },
});
export default authSlice.reducer;
