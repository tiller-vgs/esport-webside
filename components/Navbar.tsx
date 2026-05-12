"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { signOut, useSession } from "@/lib/auth-client";

export default function Navbar() {
  const session = useSession();
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      <section className="z-[999] flex w-full items-center border-b-2 border-primary lg:min-h-18 lg:px-[5%]">
        <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <Link href="/" className="flex items-center gap-4">
              <img
                src="tiller-esport-logo.png"
                alt="Tiller E-Sport Logo"
                className="h-12 w-auto"
              />
              <h1 className="font-semibold text-2xl">Tiller E-Sport</h1>
            </Link>
          </div>
          <div className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]">
            <Link
              href="/"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-primary transition"
            >
              Hjem
            </Link>
            <Link
              href="/news"
              className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-primary transition"
            >
              Nyheter
            </Link>
          </div>
          <div className="hidden justify-self-end lg:block">
            {session.data?.user && (
              <div className="flex gap-2">
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
                  <Button asChild>
                    <Link
                      href="/admin"
                      className={cn(
                        "navigation-link",
                        isActive("/admin") && "border-primary text-primary",
                      )}
                    >
                      Admin
                    </Link>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
