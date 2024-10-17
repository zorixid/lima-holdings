"use client";
import Link from "next/link";
import Image from "next/image";
import { DarkMode } from "./dark-mode";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-transparent">
      <div className="max-w-12xl container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="h-26 relative flex items-center justify-between px-5 py-2 sm:px-0">
          <div className="flex items-center justify-between gap-20 sm:gap-8">
            <Link href="/">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/logo-5.png"
                  width={1250}
                  height={1250}
                  alt="Logo"
                  className="rounded-lg w-[100px] sm:w-[150px]"
                />
              </div>
            </Link>
            <ul className="hidden sm:flex menu menu-horizontal w-full items-center gap-0 px-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-10">
            <DarkMode />
            <div className="sm:hidden">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                {icons.hamurger}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`fixed left-0 top-0 z-50 h-full w-64 bg-[#ccc] shadow-lg text-black transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <button
              className="absolute right-4 top-6 text-gray-500"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Menu"
            >
              {icons.closeMenu}
            </button>
            <ul className="menu p-2 text-xl space-y-2 mt-12">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

const icons = {
  hamurger: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  ),
  closeMenu: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  ),
};
