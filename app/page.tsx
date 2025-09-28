import Image from "next/image";
import css from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <Image
        src="/hero.png"
        alt="Car"
        width={1440}
        height={700}
        className={css.image}
      ></Image>
      <div className={css.wrapper}></div>
      <h1>Find your perfect rental car</h1>
      <h2>Reliable and budget-friendly rentals for any journey</h2>
      <Link href={"/catalog"}>View Catalog</Link>
    </main>
  );
}
