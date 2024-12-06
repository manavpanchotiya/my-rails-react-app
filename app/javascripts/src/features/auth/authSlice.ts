import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  userLogin,
  socialLogin,
  userLogout,
  destroyUser,
  verifyOTP
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
const isLoggedIn = !!userToken;

const initialState: AuthState = {
  loading: false,
  userInfo: null,
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
      localStorage.removeItem("userToken");
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        userInfo: null,
        userToken: null,
        error: null,
      };
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
      localStorage.setItem("userToken", payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Login user
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }: PayloadAction<{ data: UserInfo; userToken: string }>) => {
        state.loading = false;
        state.email = payload.data.email;
      })
      .addCase(userLogin.rejected, (state, { payload }: PayloadAction<string | null>) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = payload || "Login failed";
      })
      //SocialLogin
      .addCase(socialLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(socialLogin.fulfilled, (state, { payload }: PayloadAction<{ data: UserInfo; userToken: string }>) => {
        state.loading = false;
        state.userInfo = payload.data;
        state.email = payload.data.email;
        state.userToken = payload.userToken;
        state.isLoggedIn = true;
      })
      .addCase(socialLogin.rejected, (state, { payload }: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = payload || "Something went wrong!";
      })
      // Verify OTP
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, { payload }: PayloadAction<{ data: UserInfo; userToken: string }>) => {
        state.loading = false;
        state.userInfo = payload.data;
        state.email = payload.data.email;
        state.userToken = payload.userToken;
        state.isLoggedIn = true;
      })
      .addCase(verifyOTP.rejected, (state, { payload }: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = payload || "OTP verification failed";
      })
      // Logout user
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.userInfo = null;
        state.userToken = null;
        state.error = null;
      })
      .addCase(userLogout.rejected, (state, { payload }: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = payload || "Logout failed";
      })
      // Destroy user
      .addCase(destroyUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(destroyUser.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.userInfo = null;
        state.userToken = null;
        state.error = null;
      })
      .addCase(destroyUser.rejected, (state, { payload }: PayloadAction<string | null>) => {
        state.loading = false;
        state.error = payload || "Failed to destroy user";
      });
  },
});

// Export actions
export const { logout, setCredentials, updateToken } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
