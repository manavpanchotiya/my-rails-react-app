import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Page Not Found</p>
        <p className="text-md text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Button
          className="mt-6"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
