"use client";
import React, { useEffect } from "react";
import useAuthToken from "../../hooks/useAuthToken";
import { redirect, useRouter } from "next/navigation";

export default function ProtectedRoutes(Component) {
  return function ProtectedRoutes() {
    const { isLoggedIn } = useAuthToken();
    const router = useRouter();
    useEffect(() => {
      if (!isLoggedIn) {
        console.log("redirect", isLoggedIn);
        router.push("/login");
      }
    }, []);
    return <Component />;
  };
}
