import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
function ProtectedRoute({children}) {
  if(Cookies.get('accessToken')){
    return children;
  }else{
    return <Navigate to="/login"/>
  }
}

export default ProtectedRoute