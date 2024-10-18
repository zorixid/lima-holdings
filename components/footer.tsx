import Link from "next/link";
import Image from "next/image";
import { Socials } from "./socials";

export const Footer = () => {
  return (
    <footer className="flex flex-col px-4 pt-12 pb-6 bg-[#060706] text-white gap-8">
      <div className="flex flex-col gap-8 sm:flex-row items-start justify-around">
        <nav>
          <p>Global Headquarters</p>
          <p>Collaboration and Innovation Hub</p>
          <p>335 E. Maple, Birmingham, MI 48009 USA</p>
          <p>313.662.3605</p>
        </nav>
        <aside>
          <Link href="/">
            <div className="flex flex-shrink-0 items-center gap-3 -mt-5">
              <Image
                src="/logo-1.png"
                width={150}
                height={150}
                alt="Logo"
                className="rounded-lg"
              />
            </div>
          </Link>
        </aside>
        <nav>
          <Link href="/">
            <h6 className="footer-title">Home</h6>
          </Link>
          <Link href="/team">
            <h6 className="footer-title">Team</h6>
          </Link>
          <Link href="/contact-us">
            <h6 className="footer-title">Contact us</h6>
          </Link>
          <div className="mt-4">
            <Socials />
          </div>
        </nav>
      </div>
      <div className="flex items-center mx-auto">
        A Lima Group Holdings Company. All rights reserved.
      </div>
    </footer>
  );
};
