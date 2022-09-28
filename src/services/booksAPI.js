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
      query: () => `/api/book/`,
      providesTags: ["book"],
    }),
    addBook: build.mutation({
      query: (book) => ({
        method: "POST",
        url: "/api/book/",
        body: book,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetAllBookQuery, useAddBookMutation } = bookAPI;
