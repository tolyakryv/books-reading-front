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
  endpoints: (builder) => ({
    getAllBook: builder.query({
      query: () => ``,
      url: "/api/book/",
      providesTags: ["book"],
    }),
    addBook: builder.mutation({
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
