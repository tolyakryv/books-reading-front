import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookAPI = createApi({
  reducerPath: "book",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-reading-08.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["book"],
  endpoints: (build) => ({
    getAllBook: build.query({
      query: () => "/api/book/",
      keepUnusedDataFor: 0,
      providesTags: ["book"],
    }),
    addBook: build.mutation({
      query: (book) => ({
        url: "/api/book/",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: build.mutation({
      query: ({ _id, rating, resume }) => ({
        url: `/api/book/${_id}`,
        method: "PATCH",
        body: { rating, resume },
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetAllBookQuery, useAddBookMutation, useUpdateBookMutation } =
  bookAPI;
