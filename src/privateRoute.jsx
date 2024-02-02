import { Navigate, useLocation } from "react-router-dom";
import { useLayoutEffect } from 'react';
import { useSelector } from "react-redux";
const PrivateRoute = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);
   const loginPermission = useSelector((state) => state.login.loginData);
   // need to replace by token when changing to real api with mock api
   if (!loginPermission.token) {
     return <Navigate to="/login" replace />;
   } 
   return children;
 };
 export default PrivateRoute;