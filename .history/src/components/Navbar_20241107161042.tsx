import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary h-16">
      <div>
        <nav className="outline-none list-none">
          <li className="text-secondary">
            <Link href={"/about"}>Acerca De Nosotros</Link>
          </li>
          <li className="text-secondary">
            <Link href={"/blog"}>Blog</Link>
          </li>
          <div>
            <Menu/>
          </div>
        </nav>
        {/* <li className="text-secondary">
            <Link href={"/about"}>About</Link>
          </li> */}
      </div>
    </header>
  );
}
