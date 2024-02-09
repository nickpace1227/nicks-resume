import Image from "next/image";
import Link from "next/link";
import GitHubMark from "../../public/images/logos/github-mark.png";
import LiInBug from "../../public/images/logos/Li-In-Bug.png";

export default function Footer() {
  return (
    <div className="bg-stone-500 h-24 bottom-0 w-full absolute">
      <div className="flex justify-center items-center h-24">
        <Link href="https://www.google.com">
          <Image
            className="w-12 h-12 mx-4"
            src={GitHubMark}
            alt="GitHub Logo"
          />
        </Link>
        <Link href="https://www.google.com">
          <Image className="w-12 h-12 mx-4" src={LiInBug} alt="LinkedIn Logo" />
        </Link>
      </div>
    </div>
  );
}