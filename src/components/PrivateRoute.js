import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from './useauth';
function PrivateRoute({children}) {
  const auth = useAuth();

  return auth ? <>{children}</> : <><Navigate to="/signin"></Navigate></>
}

export default PrivateRoute


