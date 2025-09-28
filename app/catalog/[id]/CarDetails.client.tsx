"use client";
import CarForm from "@/components/CarForm/CarForm";
import { fetchCarById } from "@/lib/api/clientApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import css from "./CarDetails.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheck, FaRegCheckCircle } from "react-icons/fa";
import { BsCalendarWeek, BsCarFront, BsFuelPump } from "react-icons/bs";
import { GoGear } from "react-icons/go";

export default function CarDeatailsClient() {
  const { id } = useParams<{ id: string }>();

  const {
    data: car,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car", id],
    queryFn: () => fetchCarById(id),
    refetchOnMount: false,
  });

  if (car) {
    return (
      <>
        <div className={css.container}>
          <div className={css.carDetail}>
            <Image
              className={css.img}
              src={car.img}
              alt={car.brand}
              width={640}
              height={512}
            />
            <div className="booking-section">
              <CarForm />
            </div>
          </div>
          <div className={css.wrapperInfo}>
            <div className={css.infoCar}>
              <h2 className={css.title}>
                {car.brand} {car.model}, {car.year}
              </h2>
              <div className={css.address}>
                <p className={css.addressDesc}>
                  <IoLocationOutline />
                  {car.address}
                </p>
                <p className={css.addressDesc}>Mileage: {car.mileage} km</p>
              </div>
              <h3 className={css.price}>${car.rentalPrice}</h3>
              <p className={css.addressDesc}>{car.description}</p>
            </div>

            <div className={css.rental}>
              <h4 className={css.infoTitle}>Rental Conditions:</h4>
              <ul>
                {car.rentalConditions.map((condition, index) => (
                  <li className={css.infoDetails} key={index}>
                    <FaRegCheckCircle /> {condition}
                  </li>
                ))}
              </ul>
            </div>

            <div className={css.specifications}>
              <h4 className={css.infoTitle}>Car Specifications:</h4>
              <ul>
                <li className={css.infoDetails}>
                  <BsCalendarWeek /> Year: {car.year}
                </li>
                <li className={css.infoDetails}>
                  <BsCarFront /> Type: {car.type}
                </li>
                <li className={css.infoDetails}>
                  <BsFuelPump />
                  Fuel Consumption: {car.fuelConsumption}
                </li>
                <li className={css.infoDetails}>
                  <GoGear />
                  Engine Size: {car.engineSize}
                </li>
              </ul>
            </div>

            <div className="accessories">
              <h4 className={css.infoTitle}>
                Accessories and functionalities:
              </h4>
              <ul>
                {car.accessories.map((accessory, index) => (
                  <li className={css.infoDetails} key={index}>
                    <FaRegCheckCircle /> {accessory}
                  </li>
                ))}
                {car.functionalities.map((func, index) => (
                  <li className={css.infoDetails} key={index}>
                    <FaRegCheckCircle /> {func}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  } else if (isLoading) {
    return <p>Loading, please wait...</p>;
  } else if (car! || error) {
    return <p>Something went wrong.</p>;
  }
}
