"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { usePathname, useRouter } from "next/navigation";

function AuthPage() {
  const pathname = usePathname();
  const router = useRouter();
  function toggleAuth() {
    if (pathname === "/login") {
      return <Login />;
    } else if (pathname === "/signup") {
      return <Signup />;
    } else {
      router.push("/login");
    }
  }
  return (
    <div className="flex justify-between">
      <div className="bg-secondaryorange w-1/2 h-screen ">
        {/* <Image src={} height="100%" width="100%"/> */}
      </div>
      <div className=" w-1/2  flex justify-center items-center">
        {toggleAuth()}
      </div>
    </div>
  );
}

export default AuthPage;
