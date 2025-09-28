import Image from "next/image";
import css from "./page.module.css";
import Link from "next/link";
import Container from "@/components/Container/Container";

export default async function Home() {
  return (
    <main>
      <Container>
        <div className={css.heroSection}>
          <div className={css.heroImage}>
            <Image
              src="/hero.png"
              alt="Car on highway"
              width={1440}
              height={700}
              priority
              className={css.backgroundImage}
            />
          </div>

          <div className={css.heroContent}>
            <div className={css.textWrapper}>
              <h1 className={css.heroTitle}>Find your perfect rental car</h1>
              <h2 className={css.heroSubtitle}>
                Reliable and budget-friendly rentals for any journey
              </h2>
              <Link href="/catalog" className={css.button}>
                View Catalog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
