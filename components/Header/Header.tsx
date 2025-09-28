import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import Container from "../Container/Container";

export default function Header() {
  return (
    <Container>
      <div className={css.wrapper}>
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            width={104}
            height={16}
            alt="Logo"
            priority
          />
        </Link>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <Link className={css.link} href="/">
                Home
              </Link>
            </li>
            <li className={css.item}>
              <Link className={css.link} href="/catalog">
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
