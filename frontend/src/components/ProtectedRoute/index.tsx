import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../contexts/Auth';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useContext(authContext);
  const location = useLocation();

  if (!Object.keys(user).length) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
