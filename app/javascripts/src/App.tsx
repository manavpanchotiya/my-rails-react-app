import React from "react";
import { Provider } from "react-redux";
import store from "@/app/store";
import { ThemeProvider } from "@/lib/theme-provider";
import Home from "@/pages/home"
import Login from "@/components/auth/login"
import Signup from "@/components/auth/signup"
import { OtpVerification } from "@/pages/auth/OtpVerification"
import { Page } from "@/components/auth/page"

import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';
const App = props => (
  <ThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Page />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

export default App;