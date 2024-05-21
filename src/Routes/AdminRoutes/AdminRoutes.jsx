import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
