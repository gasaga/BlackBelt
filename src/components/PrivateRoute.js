// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

const PrivateRoute = ({ children }) => {
  const user = auth.currentUser; // Verifica el usuario actual

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;