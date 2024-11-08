"use client"
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // Estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-primary h-16">
      <div className="flex justify-between m-auto container px-4 py-2">
        <div className="text-white">New Horizont</div>
        
        {/* Menú de navegación visible en pantallas grandes */}
        <nav className="outline-none hidden sm:block">
          <ul className="list-none flex space-x-4">
            <li className="text-secondary">
              <Link href={"/about"}>Acerca De Nosotros</Link>
            </li>
            <li className="text-secondary">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Icono del menú que solo se muestra en pantallas pequeñas */}
        <div className="sm:hidden" onClick={toggleMenu}>
          <Menu color="white" size={45} />
        </div>
      </div>

      {/* Menú desplegable que aparece solo en pantallas pequeñas */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-primary py-4">
          <ul className="list-none flex flex-col items-center space-y-4">
            <li className="text-white">
              <Link href={"/about"}>Acerca De Nosotros</Link>
            </li>
            <li className="text-white">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
