import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
function PublicRoute({children}) {
  if(Cookies.get('accessToken')){
    return <Navigate to="/" />
  }
  else{
    return children;
  }
}

export default PublicRoute;