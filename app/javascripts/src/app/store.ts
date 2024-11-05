import { configureStore, Middleware } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import { authApi } from "./services/auth/authService";
import authMiddleware from "@/middleware/authMiddleware";

// Define the type of the store's state
export type RootState = ReturnType<typeof store.getState>;

// Define the type of the dispatch function
export type AppDispatch = typeof store.dispatch;
// Create the store
const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, authMiddleware as Middleware),
});

// Export the store
export default store;
