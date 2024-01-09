import PATH from '@/src/routes/path';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedPublicRoute = () => {
  const location = useLocation();

  if (location.pathname === PATH.ROOT) {
    return <Navigate to={PATH.MAIN} />;
  }

  return <Outlet />;
};

export default ProtectedPublicRoute;
