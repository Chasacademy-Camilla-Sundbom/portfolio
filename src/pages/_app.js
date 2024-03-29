import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <nav>
        <ul className="flex justify-center md:flex-row gap-4 md:gap-8 md:justify-end md:pr-20 py-6 font-bold text-lg">
          <li>
            <Link
              href="/"
              className={router.pathname === "/" ? "text-[#5fe697]" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Techstack"
              className={router.pathname === "/Techstack" ? "text-[#5fe697]" : ""}
            >
              Tech Stack
            </Link>
          </li>
          <li>
            <Link
              href="/About"
              className={router.pathname === "/About" ? "text-[#5fe697]" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/Projects"
              className={router.pathname === "/Projects" ? "text-[#5fe697]" : ""}
            >
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
