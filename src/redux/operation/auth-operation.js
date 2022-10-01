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

const register = createAsyncThunk(
  "auth/register",
  async (userRegInfo, thunkAPI) => {
    try {
      const { data } = await axios.post("/api/auth/register", userRegInfo);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  try {
    const { data } = await axios.post("/api/auth/login", userInfo);
    console.log(data);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get("/api/auth/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const google = createAsyncThunk("auth/google", async (token, thunkAPI) => {
  try {
    await axios.get("/api/auth/google");
    token.set(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const operation = { register, logIn, logOut, google };
export default operation;
