import React from 'react';
import { useGoogleAuth } from '../context/GoogleAuthContext';
const LogoutButton = () => {
  const { googleAuth, userLogout } = useGoogleAuth();
  const clickHandler = async () => {
    await googleAuth?.signOut();
    userLogout();
  };
  return (
    <button className='logout-btn' onClick={clickHandler}>
      Logout
    </button>
  );
};

export default LogoutButton;
