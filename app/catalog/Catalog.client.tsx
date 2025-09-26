"use client";
import CarList from "@/components/CarList/CarList";
import css from "./catalog.module.css";
import { fetchCars } from "@/lib/api/clientApi";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import BrandSelect from "@/components/CatalogFilter/BrandSelect/BrandSelect";
import PriceSelect from "@/components/CatalogFilter/PriceSelect/PriceSelect";
import MileageSelect from "@/components/CatalogFilter/MileageSelect/Mileage";

export default function ClientCatalog() {
  //   const { params, setParams } = useState();

  const { data, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchCars(),
    placeholderData: keepPreviousData,
  });

  const cars = data?.cars ?? [];

  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <BrandSelect />
        <PriceSelect />
        <MileageSelect />
        <button type="submit">Search</button>
        <CarList cars={cars} />
      </form>
    </>
  );
}
