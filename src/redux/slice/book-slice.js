import { createSlice } from "@reduxjs/toolkit";
// import operation from "./auth-operation";
import { bookAPI } from "../../services/booksAPI";
const initialStateBook = {
  book: {
    title: null,
    author: null,
    publicDate: null,
    amountPages: null,
  },
};
const bookSlice = createSlice({
  name: "book",
  initialStateBook,
  extraReducers: {
    [bookAPI.useGetAllBookQuery](state, action) {
      state.book = action.payload.book;
    },
    [bookAPI.useAddBookMutation](state, action) {
      state.book = action.payload.book;
    },
  },
});
export default bookSlice.reducer;
