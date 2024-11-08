"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <header className="bg-primary h-16">
      <div className="flex justify-between m-auto      container px-4 py-2  ">
        <div className="text-white">New Horizont</div>
        <nav className="outline-none hidden sm:block list-none">
          <li className="text-secondary">
            <Link href={"/about"}>Acerca De Nosotros</Link>
          </li>
          <li className="text-secondary">
            <Link href={"/blog"}>Blog</Link>
          </li>
        </nav>
        {isOpen && (
          <>
            <nav className="outline-none absolute flex flex-col top-0 bottom-0 right-0 left-20  bg-black opacity-90 z-30  list-none">
              <li className="text-white">
                <Link href={"/about"}>Acerca De Nosotros</Link>
              </li>
              <li className="text-white">
                <Link href={"/blog"}>Blog</Link>
              </li>
            </nav>
            <div className=" z-40  sm:hidden">
              <X color="white" size={45} />
            </div>
          </>
        )}
        <div className="  sm:hidden">
          <Menu color="white" size={45} />
        </div>

        {/* <li className="text-secondary">
            <Link href={"/about"}>About</Link>
          </li> */}
      </div>
    </header>
  );
}
