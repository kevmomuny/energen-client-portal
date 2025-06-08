import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../../services/authService'; // Import from authService

const ProtectedRoute: React.FC = () => {
  const isAuth = isAuthenticated(); // Use the actual auth check

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
