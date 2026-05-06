"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const session = useSession();

  return (
    <>
      <nav className="flex h-18 px-5 border-b-2 border-primary justify-between">
        <div className="flex">
          <div className="flex items-center">
            <img
              src="tiller-esport-logo.png"
              alt="Tiller E-Sport Logo"
              className="h-12 w-auto"
            />
            <h1 className="text-2xl font-semibold mx-3">
              <Link href="/">Tiller E-Sport</Link>
            </h1>
          </div>
          <div className="flex items-center">
            <Link href="/" className="navigation-link">
              Home
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {session.data?.user && (
            <>
              <Button
                variant="outline"
                className="border-primary border-2"
                onClick={() => {
                  signOut();
                  window.location.href = "/";
                }}
              >
                Logg Ut
              </Button>
              {session.data?.user.role === "ADMIN" && (
                <Button>
                  <Link href="/admin">Admin</Link>
                </Button>
              )}
            </>
          )}
        </div>
      </nav>
    </>
  );
}
