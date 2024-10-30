import { Middleware } from 'redux';
import { logout } from "@/features/auth/authSlice"; // Import your logout action
import { RootState } from "@/store"; // Import your root state type

const authMiddleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  // Prevent processing the logout action to avoid infinite loops
  if (action.type === logout.type) {
    return next(action);
  }

  const state = store.getState();
  const { userToken } = state.auth;

  if (userToken) {
    // Decode the token to check its expiration
    const tokenPayload = JSON.parse(atob(userToken.split(".")[1]));
    const isTokenExpired = tokenPayload.exp * 1000 < Date.now();

    if (isTokenExpired) {
      store.dispatch(logout()); // Dispatch the logout action if the token is expired
      return; // Stop further action dispatch
    }
  }

  return next(action); // Proceed with the action if the token is valid
};

export default authMiddleware;
