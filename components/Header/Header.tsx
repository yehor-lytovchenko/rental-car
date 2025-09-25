import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <>
      <Link href="/">
        <Image src="/logo.svg" width={104} height={16} alt="Logo" priority />
      </Link>
      <nav>
        <ul>
          <li>
            <Link className={css.navText} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.navText} href="/catalog">
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
