// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductProps } from "../types";

// Define a service using a base URL and expected endpoints
export const productsAPI = createApi({
  reducerPath: "productsAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Array<ProductProps>, any>({
      query: () => `products`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = productsAPI;
