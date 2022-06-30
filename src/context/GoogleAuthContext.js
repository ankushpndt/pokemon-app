import React, { useState } from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';
import { useNavigate } from 'react-router-dom';
const GoogleAuthContext = React.createContext();

export const GoogleAuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const googleAuth = useGoogleLogin({
    clientId: process.env.REACT_APP_CLIENT_ID,
  });

  const { token: savedToken } = JSON.parse(localStorage?.getItem('login')) || {
    token: null,
  };

  const [token, setToken] = useState(savedToken);
  const name = googleAuth?.googleUser?.profileObj?.name;
  const email = googleAuth?.googleUser?.profileObj?.email;
  const loginWithCredentials = async ({ response }) => {
    try {
      console.log(response);
      loginUser({ token: response?.accessToken });
    } catch (error) {
      console.log(error);
    }
  };
  const loginUser = ({ token }) => {
    setToken(token);

    localStorage.setItem(
      'login',
      JSON.stringify({
        token,
      })
    );
  };
  const userLogout = async () => {
    localStorage.removeItem('login');

    setToken('');

    navigate('/');
  };
  return (
    <GoogleAuthContext.Provider
      value={{
        googleAuth,
        token,
        name,
        email,
        setToken,
        loginWithCredentials,
        userLogout,
      }}
    >
      {children}
    </GoogleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => React.useContext(GoogleAuthContext);
