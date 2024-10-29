import React from "react";

import { ThemeProvider } from "@/lib/theme-provider";
import Home from "@/pages/home"
import Login from "@/components/auth/login"
import Signup from "@/components/auth/signup"
import { Page } from "@/components/auth/page"

import { BrowserRouter } from 'react-router-dom';
import { Navigate, Route, Routes } from 'react-router';
const App = props => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Page />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;