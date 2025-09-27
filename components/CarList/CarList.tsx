import { Cars } from "@/types/cars";
import Image from "next/image";
import Link from "next/link";

interface CarListProps {
  cars: Cars[];
}

export default function CarList({ cars }: CarListProps) {
  return (
    <ul>
      {cars.map((car) => (
        <li key={car.id}>
          <div>
            <Image
              src={car.img}
              alt={`${car.brand} ${car.model} ${car.year}`}
              width={276}
              height={268}
            />
            <button>
              <span>❤</span>
            </button>
          </div>

          <div>
            <h3>
              {car.brand} <span>{car.model}</span>, {car.year}
            </h3>

            <p>${car.rentalPrice}</p>

            <ul>
              <li>
                {car.address}• {car.rentalCompany}
              </li>
              <li>
                {car.type} • {car.mileage}
              </li>
            </ul>

            <Link href={`/catalog/${car.id}`}>Read more</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
