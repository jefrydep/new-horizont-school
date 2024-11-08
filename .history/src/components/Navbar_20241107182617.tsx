"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-primary h-16">
      <div className="flex justify-between m-auto container px-4 py-2">
        <div className="text-white">New Horizont</div>
        <nav className="outline-none hidden sm:block list-none">
          <li className="text-secondary">
            <Link href={"/about"}>Acerca De Nosotros</Link>
          </li>
          <li className="text-secondary">
            <Link href={"/blog"}>Blog</Link>
          </li>
        </nav>

        {/* Menú desplegable */}
        {isOpen && (
          <>
            <nav
              className="outline-none absolute flex flex-col top-0 bottom-0 right-4 left-0 bg-black opacity-90 z-30 list-none transition-all ease-in-out duration-500 transform translate-x-0"
            >
              <li className="text-white p-4">
                <Link href={"/about"}>Acerca De Nosotros</Link>
              </li>
              <li className="text-white p-4">
                <Link href={"/blog"}>Blog</Link>
              </li>
            </nav>
            <div className="z-40 absolute right-4 sm:hidden">
              <X onClick={() => setIsOpen(!isOpen)} color="white" size={45} />
            </div>
          </>
        )}

        {/* Ícono del menú */}
        {!isOpen && (
          <div className="sm:hidden">
            <Menu onClick={() => setIsOpen(!isOpen)} color="white" size={45} />
          </div>
        )}
      </div>
    </header>
  );
}
