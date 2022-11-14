import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trainingAPI = createApi({
  reducerPath: "train",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://books-reading-back.vercel.app",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
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
      keepUnusedDataFor: 0,
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
  useAddTrainMutation,
  useAddTrainStatisticMutation,
  useGetTrainQuery,
  useUpdateStatusBookMutation,
  useDelTrainMutation,
  useGetBooksQuery,
} = trainingAPI;
