import { createSlice } from "@reduxjs/toolkit";
import operation from "../operation/books-operation";

const initialState = {
  books: [],
  addBook: false,
  error: false,
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
      state.error = false;
      state.addBook = true;
    },
    [operation.addSummary.rejected](state, action) {
      state.error = true;
    },
  },
});

export default booksSlice.reducer;
