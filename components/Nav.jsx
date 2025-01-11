"use client";

import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { set } from "mongoose";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProviders();
  }, []);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center relative">
        <Image
          width={30}
          height={30}
          className="object-contain"
          alt="Share Propts Logo"
          src="/assets/images/logo.svg"
        />
        <p className="logo_text">PromptSphere</p>
      </Link>

      {/* Desctop Navigation */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create Post
            </Link>
            <button
              type="button"
              onClick={() => signOut}
              className="outline_btn"
            >
              SignOut
            </button>

            <Link href={"/profile"}>
              <Image
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                src={"/assets/images/logo.svg"}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black)btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
