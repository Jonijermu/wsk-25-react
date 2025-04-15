// ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../hooks/contextHooks';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
