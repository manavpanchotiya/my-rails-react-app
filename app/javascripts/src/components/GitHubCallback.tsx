import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "@/apis/axios";

const GitHubCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGitHubUser = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (code) {
        try {
          const response = await axiosInstance.get(`/auth/github/callback?code=${code}`);
          // Assuming your backend sends back the user or token
          const { user } = response.data;

          // Process user data (e.g., save in Redux or localStorage)
          console.log("GitHub User:", user);

          navigate("/dashboard");
        } catch (error) {
          console.error("Error during GitHub callback processing:", error);
        }
      }
    };

    fetchGitHubUser();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GitHubCallback;
