
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = useSelector(state => state.auth.status);
  return isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
