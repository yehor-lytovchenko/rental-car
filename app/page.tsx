import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image src="/hero.png" alt="Car" width={1440} height={700}></Image>
    </main>
  );
}
