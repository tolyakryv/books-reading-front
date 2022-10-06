import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trainingAPI = createApi({
  reducerPath: "train",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-reading-08.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      //   const token =
      //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzg4MGY3NmQ3OWIzMDI4M2QyOTI0NyIsInNpZCI6IjYzM2FjYjNmOWI3YzYxMzM0MzlkZjAzMSIsImlhdCI6MTY2NDc5NzUwMywiZXhwIjoxNjY0ODA4MzAzfQ.U51QlAfflw4GUqv1yAWe1BHW_jgl_QU0hOFOTyHRzb8";
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["train"],
  endpoints: (build) => ({
    getTrain: build.query({
      query: () => "/api/train/",
      providesTags: ["train"],
    }),
    addTrain: build.mutation({
      query: (data) => ({
        url: "/api/train/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["train"],
    }),
    getBooks: build.query({
      query: () => ({
        url: "/api/book",
        method: "GET",
      }),
    }),
    addTrainStatistic: build.mutation({
      query: (value) => ({
        url: "/api/train/statistic",
        method: "PATCH",
        body: {
          date: value.formalizedDate,
          createAt: value.createdAt,
          amountPages: value.pageNumber,
        },
      }),
      invalidatesTags: ["train"],
    }),
    // addBookInTrain: build.mutation({
    //   query: ({ bookId }) => ({
    //     url: `/api/train/${bookId}`,
    //     method: "PATCH",
    //   }),
    //   invalidatesTags: ["train"],
    // }),
    // delBookFromTrain: build.mutation({
    //   query: ({ bookId }) => ({
    //     url: `/api/train/${bookId}`,
    //     method: "DELET",
    //   }),
    //   invalidatesTags: ["train"],
    // }),
    delTrain: build.mutation({
      query: () => ({
        url: "/api/train/",
        method: "DELETE",
      }),
      invalidatesTags: ["train"],
    }),
    updateStatusBook: build.mutation({
      query: ({ bookId, status }) => ({
        url: `/api/train/${bookId}/status`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["train"],
    }),
  }),
});

export const {
  // useAddBookInTrainMutation,
  useAddTrainMutation,
  useAddTrainStatisticMutation,
  // useDelBookFromTrainMutation,
  useGetTrainQuery,
  useUpdateStatusBookMutation,
  useDelTrainMutation,
  useGetBooksQuery,
} = trainingAPI;
