// Import React and hooks
import React, { useState } from "react";

// Redux provider
import { Provider } from "react-redux";
import store from "@/app/store";

// Theme Provider
import { ThemeProvider } from "@/lib/theme-provider";

// Router Imports
import { BrowserRouter } from "react-router-dom";

// Notification and Toast Imports
import { Toaster } from "sonner";
import useNotificationsChannel from "@/hooks/use-notification-channel";

// AppRoutes Import
import AppRoutes from "@/routes/AppRoutes";

// Main App Component
const App = () => {
  // State for storing messages
  const [messages, setMessages] = useState<string[]>([]);

  // Hook to listen for notification messages
  useNotificationsChannel((data) => {
    setMessages((prevMessages) => [...prevMessages, data.message]);
  });

  return (
    <ThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <Toaster richColors />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
