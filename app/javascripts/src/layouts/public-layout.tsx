import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicLayout = () => {
  const { isLoggedIn } = useSelector((state: any) => state.auth);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicLayout;
