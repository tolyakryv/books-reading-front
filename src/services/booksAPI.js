import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookAPI = createApi({
  reducerPath: "book",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-reading-08.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzg4MGY3NmQ3OWIzMDI4M2QyOTI0NyIsInNpZCI6IjYzM2FjYjNmOWI3YzYxMzM0MzlkZjAzMSIsImlhdCI6MTY2NDc5NzUwMywiZXhwIjoxNjY0ODA4MzAzfQ.U51QlAfflw4GUqv1yAWe1BHW_jgl_QU0hOFOTyHRzb8"
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
