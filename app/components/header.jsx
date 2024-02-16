import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.png";

export default function Header() {
  return (
    <div className="h-24 top-0 absolute w-full bg-darkBlue">
      <div className="flex flex-col items-center">
        <h1 className="m-2 font-Honk text-4xl">Nick's Resume</h1>
        <nav>
          <Link
            href="/"
            className="m-2 px-1 bg-blueGray rounded-lg hover:bg-white"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="m-2 px-1 bg-blueGray rounded-lg hover:bg-white"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="m-2 px-1 bg-blueGray rounded-lg hover:bg-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
