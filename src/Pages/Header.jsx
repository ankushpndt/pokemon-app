import React from 'react';
import LogoutButton from './Logout';
import { Searchbar } from './Searchbar';
const Header = ({ name, email, token }) => {
  return (
    <div>
      <div className='user-info'>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
      <div className='logout-btn'>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Header;
