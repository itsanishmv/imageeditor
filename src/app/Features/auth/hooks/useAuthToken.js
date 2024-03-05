"use client";
import React, { useEffect, useState } from "react";

function useAuthToken() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsloggedIn(true);
      console.log("ivie :", localStorage.getItem("user"));
    }
  }, [isLoggedIn]);
  //   console.log("avide :", localStorage.getItem("user"));
  return { isLoggedIn };
}

export default useAuthToken;
