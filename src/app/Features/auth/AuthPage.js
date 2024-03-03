import React from "react";
import Image from "next/image";
import Login from "./components/login/Login";
function AuthPage() {
  return (
    <div className="flex justify-between">
      <div className="bg-secondaryorange w-1/2 h-screen ">
        {/* <Image src={} height="100%" width="100%"/> */}
      </div>
      <div className=" w-1/2  flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
}

export default AuthPage;
