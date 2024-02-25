"use client";

import { getServerSession } from "next-auth/next";
import { useState, useEffect } from "react";
import { options } from "@/options";

function Test(): JSX.Element {
  const [session, setSession] = useState<object | null>(null);
  useEffect(() => {
    getServerSession(options)
      .then((session) => {
        console.log(session);
        setSession(session);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (session) {
    return <div>{JSON.stringify(session)}</div>;
  } else {
    return <h1>no data</h1>;
  }
}

export default Test;
