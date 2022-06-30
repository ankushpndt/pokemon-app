import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuth } from '../context/GoogleAuthContext';

const LoginButton = () => {
  const { googleAuth } = useGoogleAuth();
  const navigate = useNavigate();
  useEffect(() => {
    googleAuth?.isSignedIn ? navigate('/list') : navigate('/');
  }, [googleAuth?.isSignedIn, navigate]);
  return <button onClick={googleAuth?.signIn}>Login</button>;
};

export default LoginButton;
