import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import { ApplicationLogo } from "@/components/Branding";

import { NavLink } from "./NavLink";
import { ResponsiveNavbar } from "./ResponsiveNavbar";

export const Navbar = () => {
  const router = useRouter();
  const [showingNavigationDrawer, setShowingNavigationDrawer] = useState(false);

  return (
    <nav className="z-10 bg-white drop-shadow-md relative py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <a>
                  <ApplicationLogo />
                </a>
              </Link>
            </div>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 lg:space-x-12">
            <NavLink active={router.pathname === "/"} href="/">
              HOME
            </NavLink>
            <NavLink
              active={router.pathname.startsWith("/projects")}
              href="/projects"
            >
              PROJECTS
            </NavLink>
            <NavLink active={router.pathname === "/about"} href="/about">
              ABOUT
            </NavLink>
            <NavLink active={router.pathname === "/contact"} href="/contact">
              CONTACT
            </NavLink>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() =>
                setShowingNavigationDrawer((previousState) => !previousState)
              }
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:text-gray-500"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <ResponsiveNavbar
        onClose={() => setShowingNavigationDrawer(false)}
        isOpen={showingNavigationDrawer}
      />
    </nav>
  );
};
