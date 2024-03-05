"use client";
import React, { useEffect } from "react";
import useAuthToken from "../auth/hooks/useAuthToken";
import ProtectedRoutes from "../auth/components/protectedRoutes/ProtectedRoutes";
function Dashboard() {
  return <div>Dashboard</div>;
}

export default ProtectedRoutes(Dashboard);
