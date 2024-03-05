import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit({ email, password });
    setEmail(""); // Clear form after submit
    setPassword("");
    router.push("/Dashboard");
  };
  return (
    <form
      className="space-y-4 w-1/2 flex flex-col gap-4 items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center gap-2 -translate-y-[70px]">
        <h1 className=" text-4xl font-bold">
          Welcome to <span className="text-4xl">Zippy</span>
        </h1>
        <h4 className="font-semibold text-primarygrey">
          Signup to create amazing content!
        </h4>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 focus:outline-none"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className={` w-full flex items-center gap-2 fill-white justify-center py-4 px-4 text-lg font-semibold text-white bg-primaryorange rounded-xl  `}
      >
        <span>Signup</span>
        {/* <Image src="./login.svg" alt="login icon" width={20} height={20} /> */}
      </button>
      <span>
        Don't have an account?{" "}
        <span
          onClick={() => router.push("/login")}
          className=" text-primaryorange cursor-pointer"
        >
          Login.
        </span>
      </span>
    </form>
  );
}

export default Signup;
