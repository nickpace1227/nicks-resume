import Link from "next/link";
import Image from "next/image";
import GitHubMark from "../../public/images/logos/github-mark.png";
import LiInBug from "../../public/images/logos/Li-In-Bug.png";

export default function Header() {
  return (
    <div className="h-28 top-0 absolute w-full bg-limeGreen flex flex-row items-center lg:flex-row justify-center lg:items-around">
      <div className="flex flex-col items-center">
        <div className="font-Honk text-4xl lg:text-5xl">{`Nicholas Pace`}</div>
        <div className="flex m-2">
          <Link
            href="/"
            className="mx-2 text-base lg:text-xl p-2 bg-blueGray rounded-lg hover:bg-white shadow-dark"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="mx-2 text-base lg:text-xl p-2 bg-blueGray rounded-lg hover:bg-white shadow-dark"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="mx-2 text-base lg:text-xl p-2 bg-blueGray rounded-lg hover:bg-white shadow-dark"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="flex flex-end">
        <div className="flex flex-col lg:flex-row m-1 lg:m-2">
          <a
            target="_blank"
            href="https://github.com/nickpace1227"
            className="w-10 lg:w-16 h-10 lg:h-16  bg-blueGray flex justify-center items-center rounded-lg m-1 lg:m-2 hover:bg-white shadow-dark"
          >
            <Image
              className="w-6 lg:w-12 h-6 lg:h-12 mx-2"
              src={GitHubMark}
              alt="GitHub Logo"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nicholas-pace-ab8717125/"
            className="w-10 lg:w-16 h-10 lg:h-16  bg-blueGray flex justify-center items-center rounded-lg m-1 lg:m-2 hover:bg-white shadow-dark"
          >
            <Image
              className="w-6 lg:w-12 h-6 lg:h-12 mx-2"
              src={LiInBug}
              alt="LinkedIn Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
