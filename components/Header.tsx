import Link from "next/link";

import { LogIn } from "lucide-react";
import Image from "next/image";
import logo from "@/public/logo.svg";

const Header = () => {
  return (
    <header className="py-4">
      <section className="container flex items-center justify-between">
        <Link href={"/"} className="text-xl font-bold flex items-center gap-2">
          <Image src={logo} alt="AnimeFX logo" className="w-10" />
          AnimeFX
        </Link>

        <nav className="flex items-center gap-5 list-none">
          <li>
            <Link href={"animes"}>animelar</Link>
          </li>
          <li>
            <Link href={"animes"}>mangalar</Link>
          </li>

          <li>
            <Link href={"hentai"}>hentailar</Link>
          </li>
          <li>
            <Link href={"animes"}>obunalar</Link>
          </li>
        </nav>

        <Link
          href={"/auth/login"}
          className="bg-lime-400 px-6 py-2 rounded-full text-black tracking-wide font-bold flex items-center justify-center gap-2"
        >
          Kirish <LogIn size={16} />
        </Link>
      </section>
    </header>
  );
};

export default Header;
