import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary h-16">
      <div>
        <nav>
            <Link href={"/about"} >
            About
            </Link>
        </nav>
      </div>
    </header>
  );
}
