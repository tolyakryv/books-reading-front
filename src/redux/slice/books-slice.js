import { createSlice } from "@reduxjs/toolkit";
import operation from "../operation/books-operation";

const initialState = {
  books: [],
  addBook: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: {
    [operation.getBooks.fulfilled](state, action) {
      state.books = action.payload;
      state.addBook = false;
    },
    [operation.addBook.fulfilled](state, action) {
      state.addBook = true;
    },
    [operation.addSummary.fulfilled](state, action) {
      state.addBook = true;
    },
  },
});


export default booksSlice.reducer;
