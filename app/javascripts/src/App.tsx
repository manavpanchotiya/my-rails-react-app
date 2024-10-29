import React from "react";
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/lib/theme-context"
import Navbar from "@/components/navbar/index"
import { BrowserRouter } from 'react-router-dom';
const App = props => (
   <ThemeProvider>
     <BrowserRouter>
        <Navbar/>
     </BrowserRouter>
  </ThemeProvider>
);

export default App;