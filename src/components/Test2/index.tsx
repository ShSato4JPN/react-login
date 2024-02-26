"use client";

import { useSession } from "next-auth/react";

function Test2(): JSX.Element {
  const { data: session } = useSession();

  return <h1>{JSON.stringify(session)}</h1>;
}

export default Test2;
