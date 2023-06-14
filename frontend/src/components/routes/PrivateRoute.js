import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { NavContext } from '../../context/contextNav';

const PrivateRoute = ({children}) => {
  const isLoggedIn = localStorage.getItem('token');

  return isLoggedIn ? ( <>{children}</> ) : (<Navigate to="/login"/>);
  };

export default PrivateRoute;