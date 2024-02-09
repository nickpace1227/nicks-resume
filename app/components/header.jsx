import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Header() {
  return (
    <div className="flex h-24 top-0 absolute w-full bg-stone-500">
      <Image
        src={Logo}
        alt="logo"
        quality={100}
        placeholder="blur"
        className="m-2 h-16 w-16"
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
          <Link href="/contact" className="m-2">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
