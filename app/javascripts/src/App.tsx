import React from "react";
import { Provider } from "react-redux";
import store from "@/app/store";
import { ThemeProvider } from "@/lib/theme-provider";
import Home from "@/pages/home";
import Login from "@/components/auth/login";
import Signup from "@/components/auth/signup";
import { OtpVerification } from "@/pages/auth/OtpVerification";
import { Page } from "@/components/auth/page";

import PublicLayout from "@/layouts/public-layout";
import PrivateLayout from "@/layouts/private-layout";
import SettingsLayout from "@/pages/settings/layout";

import Dashboard from "@/pages/dashboard/index";

import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import Account from "@/pages/settings/account/page";
import Profile from "@/pages/settings/profile/page";
import { Toaster } from 'sonner'
const App = (props) => (
  <ThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Page />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route path="/" element={<PrivateLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="settings" element={<SettingsLayout />}>
              <Route path="account" element={<Account />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    <Toaster richColors/>
  </ThemeProvider>


);

export default App;
