import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to='/'>
        <FaHome size={24} />
      </Link>
      <Link to='/register'>
        <FaUserAlt size={20} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to='/logout'>
          <FaPowerOff size={22} />
        </Link>
      ) : (
        <Link to='/login'>
          <FaSignInAlt size={24} />
        </Link>
      )}
      {isLoggedIn && <FaCircle size={22} color='#66ff33' />}
    </Nav>
  );
}
