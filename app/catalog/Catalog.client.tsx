"use client";
import CarList from "@/components/CarList/CarList";
import css from "./catalog.module.css";
import { fetchCars } from "@/lib/api/clientApi";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function ClientCatalog() {
  //   const { params, setParams } = useState();

  const { data, isError } = useQuery({
    queryKey: ["cars"],
    queryFn: () => fetchCars(),
    placeholderData: keepPreviousData,
  });

  const cars = data?.cars ?? [];

  return <CarList cars={cars} />;
}
