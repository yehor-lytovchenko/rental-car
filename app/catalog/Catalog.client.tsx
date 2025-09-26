"use client";
import CarList from "@/components/CarList/CarList";
import css from "./catalog.module.css";
import { fetchCars } from "@/lib/api/clientApi";
import { useInfiniteQuery } from "@tanstack/react-query";
import BrandSelect from "@/components/CatalogFilter/BrandSelect/BrandSelect";
import PriceSelect from "@/components/CatalogFilter/PriceSelect/PriceSelect";
import MileageSelect from "@/components/CatalogFilter/MileageSelect/Mileage";
import { useFilterStore } from "@/lib/store/carsStore";
import { useState, useMemo } from "react";

export default function ClientCatalog() {
  const [submittedFilters, setSubmittedFilters] = useState({});

  const { brand, rentalPrice, minMileage, maxMileage } = useFilterStore();

  const formFilters = useMemo(
    () => ({
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
    }),
    [brand, rentalPrice, minMileage, maxMileage]
  );

  const {
    data,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["cars", submittedFilters],
    queryFn: ({ pageParam = 1 }) =>
      fetchCars({ ...submittedFilters, page: String(pageParam) }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.cars.length === 12 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedFilters(formFilters);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong.</div>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <BrandSelect />
        <PriceSelect />
        <MileageSelect />
        <button type="submit">Search</button>
      </form>
      <CarList cars={cars} />
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
}
