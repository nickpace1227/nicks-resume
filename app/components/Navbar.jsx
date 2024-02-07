import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Navbar() {
  return (
    <div className="flex">
      <Image
        src={Logo}
        alt="logo"
        width={100}
        height={100}
        quality={100}
        placeholder="blur"
        className="m-2"
      />
      <div>
        <h1 className="m-2">Nick's Resume</h1>
        <nav>
          <Link href="/" className="m-2">
            Home
          </Link>
          <Link href="/mySites" className="m-2">
            Sites
          </Link>
          <Link href="/about" className="m-2">
            About
          </Link>
          <Link href="/contact" className="m-2">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
