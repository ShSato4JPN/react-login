"use client";
import { SessionProvider } from "next-auth/react";
import Test2 from "@/components/Test2";

function Page() {
  return (
    <SessionProvider>
      <Test2 />
    </SessionProvider>
  );
}

export default Page;
