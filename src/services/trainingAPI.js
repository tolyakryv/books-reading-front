import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trainingAPI = createApi({
  reducerPath: "train",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://book-reading-08.herokuapp.com",
    baseUrl: "http://localhost:5000",
    prepareHeaders: (
      headers
      // { getState }
    ) => {
      // const token = getState().auth.token;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzg1M2VjOWJmN2ExYmE3NmM3YWU5NCIsInNpZCI6IjYzMzlhZTFjZmRlNjkyMmMwNzA3MzZlNiIsImlhdCI6MTY2NDcyNDUwOCwiZXhwIjoxNjY0NzM1MzA4fQ.Er7YuDouAU1CEOoTTHyGfrl8buNne96L4L3VX31T-g4";
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
    addTrainStatistic: build.mutation({
      query: (data) => ({
        url: "/api/train/statistic",
        method: "PATCH",
        body: data,
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
} = trainingAPI;
