import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const logIn = createAsyncThunk("auth/login", async (userInfo, thunkAPI) => {
  try {
    const { data } = await axios.post("/api/auth/login", userInfo);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get("/api/auth/logout");
    token.unset();
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const currentUser = createAsyncThunk(
  "auth/currentUser",
  async (userToken, thunkAPI) => {
    try {
      token.set(userToken);
      const { data } = await axios.get("/api/auth/current");
      return { ...data, token: userToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operation = { register, logIn, logOut, currentUser };
export default operation;
