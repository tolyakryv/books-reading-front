import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statisticsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63360d0b8aa85b7c5d279551.mockapi.io",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;

    //   if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    //   } else {
    //     headers.delete("authorization");
    //   }

    //   return headers;
    // },
  }),
  tagTypes: ["statistics"],
  endpoints(build) {
    return {
      getStatistics: build.query({
        query: () => ({
          url: "statistics",
          method: "get",
        }),
        providesTags: ["statistics"],
      }),
      addStatistics: build.mutation({
        query: (value) => ({
          url: "statistics",
          method: "post",
          body: {
            date: value.formalizedDate,
            pages: value.pageNumber,
            createdAt: value.createdAt,
            // createdAt:
          },
        }),
        invalidatesTags: ["statistics"],
      }),
    };
  },
});

export const { useGetStatisticsQuery, useAddStatisticsMutation } =
  statisticsApi;
