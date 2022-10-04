import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const statisticsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-reading-08.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      } else {
        headers.delete("authorization");
      }

      return headers;
    },
  }),
  tagTypes: ["statistic"],
  endpoints(build) {
    return {
      getStatistics: build.query({
        query: () => ({
          url: "/api/train",
          method: "get",
        }),
        providesTags: ["statistic"],
      }),
      addStatistics: build.mutation({
        query: (value) => ({
          url: "/api/train/statistic",
          method: "patch",
          body: {
            statistic: [
              {
                date: value.formalizedDate,
                createAt: value.createdAt,
                amountPages: value.pageNumber,
              },
            ],
          },
        }),
        //   {
        //     date:value.formalizedDate,
        //     amountPages: value.pageNumber,
        //     createAt: value.createdAt
        //   },
        // }),
        invalidatesTags: ["statistic"],
      }),
    };
  },
});

export const { useGetStatisticsQuery, useAddStatisticsMutation } =
  statisticsApi;
