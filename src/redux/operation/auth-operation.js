import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://book-reading-08.herokuapp.com";
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
const register = createAsyncThunk("auth/register", async (userRegInfo) => {
  try {
    const { data } = await axios.post("/api/auth/register", userRegInfo);
    token.set(data.token);
    return data;
  } catch (error) {
    console.error();
  }
});
const logIn = createAsyncThunk("auth/login", async (userInfo) => {
  try {
    const { data } = await axios.post("/api/auth/login", userInfo);
    token.set(data.token);
    return data;
  } catch (error) {
    console.error();
  }
});
const logOut = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("/api/auth/logout");
    token.unset();
  } catch (error) {
    console.error();
  }
});

const operation = { register, logIn, logOut };
export default operation;
