import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>NavBar</h1>
      <Link href="/">Home</Link>
      <Link href="/sites">Sites</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
