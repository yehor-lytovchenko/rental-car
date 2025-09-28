"use client";
import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import Container from "../Container/Container";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
              <Link
                href="/"
                className={`${css.link} ${pathname === "/" ? css.active : ""}`}
              >
                Home
              </Link>
            </li>
            <li className={css.item}>
              <Link
                href="/catalog"
                className={`${css.link} ${
                  pathname === "/catalog" ? css.active : ""
                }`}
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}
