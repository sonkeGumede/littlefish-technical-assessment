import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsAPI } from "./product/services";
import product from './product/reducer';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productsAPI.reducerPath]: productsAPI.reducer,
    product: product
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;