"use client";
import CarForm from "@/components/CarForm/CarForm";
import { fetchCarById } from "@/lib/api/clientApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";

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
        <div className="main-container">
          <div className="booking-section">
            <h3>Book your car now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <CarForm />
          </div>

          <div className="car-details-section">
            <div className="image-and-info-wrapper">
              <Image src={car.img} alt={car.brand} width={640} height={512} />
              <div className="info-details">
                <h2>
                  {car.brand} {car.model}, {car.year}
                </h2>
                <div className="location-mileage-id">
                  <span>{car.address}</span>
                  <span>Mileage: {car.mileage} km</span>
                  <span>Id: 9582</span>
                </div>
                <h3>${car.rentalPrice}</h3>
                <p>{car.description}</p>
              </div>
            </div>

            <div className="rental-conditions">
              <h4>Rental Conditions:</h4>
              <ul>
                {car.rentalConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>

            <div className="car-specifications">
              <h4>Car Specifications:</h4>
              <ul>
                <li>Year: {car.year}</li>
                <li>Type: {car.type}</li>
                <li>Fuel Consumption: {car.fuelConsumption}</li>
                <li>Engine Size: {car.engineSize}</li>
              </ul>
            </div>

            <div className="accessories">
              <h4>Accessories and functionalities:</h4>
              <ul>
                {car.accessories.map((accessory, index) => (
                  <li key={index}>{accessory}</li>
                ))}
                {car.functionalities.map((func, index) => (
                  <li key={index}>{func}</li>
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
