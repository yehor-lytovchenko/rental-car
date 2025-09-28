import { Cars } from "@/types/cars";
import Image from "next/image";
import Link from "next/link";
import css from "./CarList.module.css";

import { useFavoritesStore } from "@/lib/store/favoritesStore";

interface CarListProps {
  cars: Cars[];
}

export default function CarList({ cars }: CarListProps) {
  const { favorites, toggleFavorite } = useFavoritesStore();

  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li key={car.id} className={css.listItem}>
          <div className={css.imageWrapper}>
            <Image
              src={car.img}
              alt={`${car.brand} ${car.model} ${car.year}`}
              width={276}
              height={268}
              className={css.img}
            />
            <div
              className={css.heartIconWrapper}
              onClick={() => toggleFavorite(car.id)}
            >
              <Image
                src={
                  favorites.includes(car.id)
                    ? "/icons/heart-active.svg"
                    : "/icons/heart.svg"
                }
                alt="Favorite"
                width={16}
                height={16}
                className={css.heartIcon}
              />
            </div>
          </div>

          <div className={css.description}>
            <div className={css.titlePrice}>
              <h3 className={css.descTitle}>
                {car.brand} <span className={css.span}>{car.model}</span>,{" "}
                {car.year}
              </h3>

              <p className={css.descTitle}>${car.rentalPrice}</p>
            </div>

            <ul>
              <li className={css.info}>
                {car.address} | {car.rentalCompany}
              </li>
              <li className={css.info}>
                {car.type} | {car.mileage} km
              </li>
            </ul>
          </div>
          <Link href={`/catalog/${car.id}`} className={css.button}>
            Read more
          </Link>
        </li>
      ))}
    </ul>
  );
}
