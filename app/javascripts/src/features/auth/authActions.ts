import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Define the backend URL based on the environment
const backendURL =
  process.env.NODE_ENV !== "production"
    ? "http://127.0.0.1:3000"
    : import.meta.env.VITE_SERVER_URL;

// Define the types for the login and registration payloads
interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  password_confirmation: string;
}

// Define the response type for the login and register actions
interface AuthResponse {
  data: any; // Adjust based on your API response structure
  userToken?: string;
}

// Login action
export const userLogin = createAsyncThunk<AuthResponse, LoginPayload>(
  "auth/login",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Content-Type": "application/json",
          "X-Galaxy-Header": "arish",
        },
      };

      const response = await axios.post(
        `/login`,
        { user: { email } },
        config
      );

      return {
        data: response.data
      };
    } catch (error: any) {
      // Return custom error message from API if any
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


// Login action
export const verifyOTP = createAsyncThunk<AuthResponse, LoginPayload>(
  "auth/verifyOTP",
  async ({ otp_code, email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Content-Type": "application/json",
          "X-Galaxy-Header": "arish",
        },
      };

      const response = await axios.post(
        `/verify_otp`,
        { user: { otp_code, email } },
        config
      );

      // console.log(response.headers)
      const authToken = response.headers["authorization"]; // Fixed the method to access headers

      // // Store user's token in local storage
      if (authToken) {
        localStorage.setItem("userToken", authToken);
      }
      return {
        data: response.data.data,
        userToken: authToken,
        isLoggedIn: response.data.isLoggedIn,
      };

    } catch (error: any) {
      // Return custom error message from API if any
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Logout action
export const userLogout = createAsyncThunk<void, void>(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const authToken = localStorage.getItem("userToken");
      // Configure headers for the logout request
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authToken}`,
        },
      };

      // Make the DELETE request to the logout endpoint
      await axios.delete(`${backendURL}/logout`, config);
      // Remove the user's token from local storage
      localStorage.removeItem("userToken");
    } catch (error: any) {
      // Handle errors
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Destroy user action
export const destroyUser = createAsyncThunk<void, void>(
  "auth/destroyUser",
  async (_, { rejectWithValue }) => {
    localStorage.removeItem("userToken");
  }
);

// Register action
export const registerUser = createAsyncThunk<AuthResponse, RegisterPayload>(
  "auth/register",
  async ({ email, password, password_confirmation }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "X-Galaxy-Header": "arish",
        },
      };

      const response = await axios.post(
        `${backendURL}/signup`,
        { user: { email, password, password_confirmation } },
        config
      );

      const authToken = response.headers["authorization"]; // Fixed the method to access headers
      // Store user's token in local storage
      if (authToken) {
        localStorage.setItem("userToken", authToken);
      }

      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
