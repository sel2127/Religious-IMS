import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const cookies = document.cookie.split(';');
  const adminToken = cookies.find(cookie => cookie.includes('admin_token'))?.split('=')[1];

  return adminToken ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;