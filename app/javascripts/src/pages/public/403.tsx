import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotAuthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">403</h1>
        <p className="text-xl text-gray-600 mt-4">Access Denied</p>
        <p className="text-md text-gray-500 mt-2">
          You do not have permission to access this page.
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

export default NotAuthorizedPage;
