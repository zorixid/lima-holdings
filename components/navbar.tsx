import Link from "next/link";
import Image from "next/image";
import { DarkMode } from "./dark-mode";

export const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-12xl container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="h-26 relative flex items-center justify-between px-5 py-5 sm:px-0">
          <div className="flex items-center justify-start gap-4 sm:gap-8">
            <Link href="/">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  src="/logo.png"
                  width={1250}
                  height={1250}
                  alt="Logo"
                  className="bg-[aliceblue] rounded-lg p-4 w-[250px]"
                />
              </div>
            </Link>
            <ul className="menu menu-horizontal flex w-full items-center gap-0 px-0">
              {" "}
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
  );
};
