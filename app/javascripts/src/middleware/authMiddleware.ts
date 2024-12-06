import { Middleware } from "redux";
import { jwtDecode } from "jwt-decode"; // Adjusted import for jwt-decode
import { logout } from "@/features/auth/authSlice";
import { RootState } from "@/store";

// Define the type for the token payload
interface TokenPayload {
  exp: number; // Expiration time in seconds since epoch
}

const authMiddleware: Middleware<unknown, RootState> = (store) => (next) => (action) => {
  // Prevent processing the logout action to avoid infinite loops
  if (action.type === logout.type) {
    return next(action);
  }

  const state = store.getState();
  const { userToken } = state.auth;

  if (userToken) {
    try {
      // Decode the token to check its expiration
      const tokenPayload: TokenPayload = jwtDecode<TokenPayload>(userToken);
      const isTokenExpired = tokenPayload.exp * 1000 < Date.now();

      if (isTokenExpired) {
        store.dispatch(logout()); // Dispatch the logout action if the token is expired
        return; // Stop further action dispatch
      }
    } catch {
      // If decoding fails, assume the token is invalid and log out the user
      store.dispatch(logout());
      return;
    }
  }

  return next(action); // Proceed with the action if the token is valid
};

export default authMiddleware;
