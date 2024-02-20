import Link from "next/link";
import Image from "next/image";
import GitHubMark from "../../public/images/logos/github-mark.png";
import LiInBug from "../../public/images/logos/Li-In-Bug.png";

export default function Header() {
  return (
    <div className="flex">
      <div className="h-28 top-0 absolute w-full bg-limeGreen flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="m-2 font-Honk text-5xl">{`Nicholas Pace`}</h1>
          <nav>
            <Link
              href="/"
              className="m-2 p-2 bg-blueGray rounded-lg hover:bg-white shadow-dark"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              className="m-2 p-2 bg-blueGray rounded-lg hover:bg-white shadow-dark"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="m-2 p-2 bg-blueGray rounded-lg hover:bg-white shadow-dark"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex justify-end">
          <div className="flex justify-center items-center">
            <a
              target="_blank"
              href="https://github.com/nickpace1227"
              className="w-16 h-16  bg-blueGray flex justify-center items-center rounded-lg m-2 hover:bg-white shadow-dark"
            >
              <Image
                className="w-12 h-12 mx-2"
                src={GitHubMark}
                alt="GitHub Logo"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nicholas-pace-ab8717125/"
              className="w-16 h-16  bg-blueGray flex justify-center items-center rounded-lg m-2 hover:bg-white shadow-dark"
            >
              <Image
                className="w-12 h-12 mx-2"
                src={LiInBug}
                alt="LinkedIn Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
