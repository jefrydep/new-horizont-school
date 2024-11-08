"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-sky-800 shadow-md    absolute    w-full  ">
      <div className="flex justify-between items-center    m-auto container px-4 py-2">
        <div className="text-white">New Horizont</div>
        <nav className="outline-none hidden    sm:flex gap-9 items-center  list-none">
          <li className="text-secondary">
            <Link href={"/about"}>Acerca De Nosotros</Link>
          </li>
          <li className="text-secondary">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="text-white p-4">
            <Link href={"/"}>Inicio</Link>
          </li>
        </nav>

        {/* Icono de Menú para abrir el menú en móvil */}
        {!isOpen && (
          <div className="sm:hidden">
            <Menu onClick={() => setIsOpen(!isOpen)} color="white" size={45} />
          </div>
        )}

        {/* Menú desplegable con animación */}
        <div
          className={`${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } absolute top-0 bottom-0 right-0 left-0 bg-black opacity-95 z-30 list-none transition-all ease-in-out `}
        >
          {isOpen && (
            <>
              <li className="text-white p-4">
                <Link href={"/about"}>Acerca De Nosotros</Link>
              </li>
              <li className="text-white p-4">
                <Link href={"/blog"}>Blog</Link>
              </li>
            </>
          )}
        </div>

        {/* Botón para cerrar el menú */}
        {isOpen && (
          <div className="z-40 absolute right-4 sm:hidden">
            <X onClick={() => setIsOpen(!isOpen)} color="white" size={45} />
          </div>
        )}
      </div>
    </header>
  );
}
