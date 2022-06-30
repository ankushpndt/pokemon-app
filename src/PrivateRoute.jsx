import { Navigate } from 'react-router-dom';

import React from 'react';
import { useGoogleAuth } from './context/GoogleAuthContext';
export const PrivateRoute = ({ children }) => {
  const { googleAuth } = useGoogleAuth();
  return googleAuth?.isSignedIn ? children : <Navigate to='/' />;
};
