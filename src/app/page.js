"use client";
import Image from "next/image";
import AuthPage from "./Features/auth/AuthPage";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathname = usePathname();
  console.log("homepage", pathname);
  return (
    <main className="">
      <AuthPage />
    </main>
  );
}
