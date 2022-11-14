import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://books-reading-back.vercel.app";

const getBooks = createAsyncThunk("books/getBooks", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/api/book");

    return data.result;
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const addBook = createAsyncThunk("books/addBook", async (book, thunkAPI) => {
  try {
    await axios.post("/api/book", book);
  } catch (error) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const addSummary = createAsyncThunk(
  "books/addBook",
  async ({ _id, rating, resume }, thunkAPI) => {
    try {
      await axios.patch(`/api/book/${_id}`, { rating, resume });
    } catch (error) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const operation = { getBooks, addBook, addSummary };
export default operation;
