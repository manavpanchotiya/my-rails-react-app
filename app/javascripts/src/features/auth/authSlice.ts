import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  registerUser,
  userLogin,
  userLogout,
  destroyUser,
} from "./authActions";

// Define the user information type
interface UserInfo {
  [key: string]: any; // Adjust based on your user data structure
}

// Define the initial state type
interface AuthState {
  loading: boolean;
  userInfo: UserInfo | null;
  userToken: string | null;
  error: string | null;
  success: boolean;
  isLoggedIn: boolean;
}

// Initialize userToken from local storage
const userToken = localStorage.getItem("userToken") || null;
const userInfo: UserInfo | null = null;
const isLoggedIn = !!userToken;

const initialState: AuthState = {
  loading: false,
  userInfo,
  userToken,
  error: null,
  success: false,
  isLoggedIn,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // Delete token from storage
      state.loading = false;
      state.isLoggedIn = false; // Change from null to false
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
    setCredentials: (
      state,
      { payload }: PayloadAction<{ data: UserInfo; isLoggedIn: boolean }>
    ) => {
      state.userInfo = payload.data;
      state.isLoggedIn = payload.isLoggedIn;
    },
    updateToken: (state, { payload }: PayloadAction<string>) => {
      state.userToken = payload;
      localStorage.setItem("userToken", payload); // Update the token in local storage
    },
  },
  extraReducers: {
    // Login user
    [userLogin.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled.type]: (state, { payload }: PayloadAction<{ data: UserInfo; userToken: string }>) => {
      state.loading = false;
      state.userInfo = payload.data;
      state.isLoggedIn = true; // Set to true if login is successful
      //state.userToken = payload.userToken;
    },
    [userLogin.rejected.type]: (state, { payload }: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = payload || "Login failed"; // Provide a default message
    },

    // Logout user
    [userLogout.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogout.fulfilled.type]: (state) => {
      state.loading = false;
      state.isLoggedIn = false; // Change from null to false
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
    [userLogout.rejected.type]: (state, { payload }: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = payload || "Logout failed"; // Provide a default message
    },

    // Destroy user
    [destroyUser.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [destroyUser.fulfilled.type]: (state) => {
      state.loading = false;
      state.isLoggedIn = false; // Change from null to false
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
    [destroyUser.rejected.type]: (state, { payload }: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = payload || "Failed to destroy user"; // Provide a default message
    },

    // Register user
    [registerUser.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled.type]: (state, { payload }: PayloadAction<{ data: UserInfo; userToken: string }>) => {
      state.loading = false;
      state.userInfo = payload.data;
      state.isLoggedIn = true; // Set to true if registration is successful
      state.userToken = payload.userToken;
    },
    [registerUser.rejected.type]: (state, { payload }: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = payload || "Registration failed"; // Provide a default message
    },
  },
});

// Export actions
export const { logout, setCredentials, updateToken } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
