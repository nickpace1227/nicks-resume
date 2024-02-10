import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Header() {
  return (
    <div className="h-24 top-0 absolute w-full bg-stone-500">
      <div className="flex justify-center items-center">
        <Image
          src={Logo}
          alt="logo"
          quality={100}
          placeholder="blur"
          className="m-2 h-16 w-16 rounded-full"
        />
        <div>
          <h1 className="m-2 font-Honk text-4xl">Nick's Resume</h1>
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
    </div>
  );
}
