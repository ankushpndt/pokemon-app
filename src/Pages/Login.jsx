import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGoogleAuth } from '../context/GoogleAuthContext';

const LoginButton = () => {
  const { googleAuth, token, loginWithCredentials } = useGoogleAuth();
  const navigate = useNavigate();

  useEffect(() => {
    token && navigate('/list');
  }, [token, navigate]);

  const clickHandler = async () => {
    const response = await googleAuth?.signIn();
    loginWithCredentials({ response });
  };

  return (
    <>
      <div className='login-btn-container'>
        <h1>Pokemon App</h1>

        <button className='login-btn' onClick={clickHandler}>
          Login
        </button>
        <h3>Please login to continue</h3>
      </div>
    </>
  );
};

export default LoginButton;
