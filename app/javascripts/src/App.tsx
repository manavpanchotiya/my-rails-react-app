import React from "react";

import { ThemeProvider } from "@/lib/theme-provider";
import Home from "@/pages/home"



import { BrowserRouter } from 'react-router-dom';
const App = props => (
  <ThemeProvider>
    <Home/>
  </ThemeProvider>
);

export default App;