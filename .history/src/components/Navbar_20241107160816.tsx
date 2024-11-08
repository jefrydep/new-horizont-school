import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary h-16">
      <div>
        <nav>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}