import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="logo"
        width={100}
        height={100}
        quality={100}
        placeholder="blur"
      />
      <h1>Nicks Resume</h1>
      <Link href="/">Home</Link>
      <Link href="/sites">Sites</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
