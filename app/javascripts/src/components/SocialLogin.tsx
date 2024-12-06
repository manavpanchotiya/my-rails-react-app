import React, { useCallback, useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "@/apis/axios";

import { socialLogin } from "@/features/auth/authActions";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [provider, setProvider] = useState<string | null>(null);
  const [profile, setProfile] = useState<any>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSocialLogin = useCallback(async (credentialResponse: any) => {
    try {
      const token = credentialResponse.credential;

      const data = {
        provider: 'google',
        token: token,
      }
      const result = await dispatch(socialLogin(data));

      if (socialLogin.fulfilled.match(result)) {
        navigate("/dashboard");
      } else {
        console.error("Login failed:", result.error.message);
      }

    } catch (error) {
      console.error("Error during social login:", error);
    }
  }, []);

  return (
    <div className="social-login-container">
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID || ""}>
        <GoogleLogin
          onSuccess={onSocialLogin}
          onError={() => {
            console.error("Google Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default SocialLogin;
