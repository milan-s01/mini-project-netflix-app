import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from './useauth';


function PrivateRoute({ children }) {
  const isAuthenticated = useAuth();
  if (isAuthenticated) {
    return <>{children}</>;
    
  }

  return <Navigate to="/home" />;
}

export default PrivateRoute;

