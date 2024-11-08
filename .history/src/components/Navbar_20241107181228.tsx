"use client";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
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
        <nav className="outline-none absolute top-0 bottom-0 right-0 left-20  bg-red-300 z-30  list-none">
          <li className="text-secondary">
            <Link href={"/about"}>Acerca De Nosotros</Link>
          </li>
          <li className="text-secondary">
            <Link href={"/blog"}>Blog</Link>
          </li>
        </nav>
        <div className="  sm:hidden">
          <Menu color="white" size={45} />
        </div>
        <div className=" absolute  sm:hidden">
          <Menu color="white" size={45} />
        </div>
        {/* <li className="text-secondary">
            <Link href={"/about"}>About</Link>
          </li> */}
      </div>
    </header>
  );
}
