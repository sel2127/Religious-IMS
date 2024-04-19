import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Route {...rest} element={<Component />} />;
};

export default PrivateRoute;