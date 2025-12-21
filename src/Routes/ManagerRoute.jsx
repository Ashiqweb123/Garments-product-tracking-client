import React from "react";

import { Navigate } from "react-router";
import useRole from "../hooks/useRole";

const ManagerRoute = ({ children }) => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (role === "manager") return children;
  return <Navigate to="/" replace="true"></Navigate>;
};

export default ManagerRoute;
