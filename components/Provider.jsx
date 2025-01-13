"use client";
import React, { Suspense } from "react";
import { SessionProvider } from "next-auth/react";
const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </SessionProvider>
  );
};

export default Provider;
