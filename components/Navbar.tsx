"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="flex justify-between h-18 px-5 border-b-2 border-primary">
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
        <div className="flex items-center gap-2">
          <Button>
            <Link href="/signin">Logg Inn</Link>
          </Button>
          <Button variant="outline" className="border-primary border-2">
            <Link href="/signup">Registrer deg</Link>
          </Button>
        </div>
      </nav>
    </>
  );
}
