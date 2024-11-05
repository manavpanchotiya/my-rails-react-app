import React, { useState } from "react";
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
import UserManagementLayout from "@/pages/user-management";
import Roles from "@/pages/user-management/roles";
import Users from "@/pages/user-management/users";
import RolePermissions from "@/pages/user-management/role_permissions";

import { Notifications } from "@/pages/notification/index";

import Dashboard from "@/pages/dashboard/index";

import { BrowserRouter } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import Account from "@/pages/settings/account/page";
import Profile from "@/pages/settings/profile/page";
import Categories from "@/pages/categories/page";
import { Toaster } from 'sonner'

import useNotificationsChannel from '@/hooks/use-notification-channel';

const App = (props) => {
const [messages, setMessages] = useState<string[]>([]);
useNotificationsChannel((data) => {
    setMessages((prevMessages) => [...prevMessages, data.message]);
});
return (
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
            <Route path="notification" element={<Notifications />} />

            <Route path="categories" element={<Categories />} />
            <Route path="/user-management" element={<UserManagementLayout />}>
              <Route path="roles" element={<Roles />} />
              <Route path="users" element={<Users />} />
              <Route path="role-permissions" element={<RolePermissions />} />
            </Route>
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
)
}

export default App;
