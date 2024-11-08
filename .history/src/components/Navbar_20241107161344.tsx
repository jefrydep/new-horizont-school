import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary h-16">
      <div className="flex justify-between px-4 py-2  ">
        <div>New Horizont</div>
        <nav className="outline-none hidden list-none">
          <li className="text-secondary">
            <Link href={"/about"}>Acerca De Nosotros</Link>
          </li>
          <li className="text-secondary">
            <Link href={"/blog"}>Blog</Link>
          </li>
        </nav>
        <div className="  ">
          <Menu color="white" size={38} />
        </div>
        {/* <li className="text-secondary">
            <Link href={"/about"}>About</Link>
          </li> */}
      </div>
    </header>
  );
}
