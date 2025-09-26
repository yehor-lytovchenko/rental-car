import { Cars } from "@/types/cars";
import axios from "axios";

interface FetchCarsParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: string;
  maxMileage?: string;
}

interface FetchCarsResponse {
  cars: Cars[];
}

export const api = axios.create({
  baseURL: "https://car-rental-api.goit.global",
  params: {
    limit: 12,
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
});

async function fetchCars(params?: FetchCarsParams): Promise<FetchCarsResponse> {
  const { data } = await api.get<FetchCarsResponse>("/cars", { params });
  return data;
}

export { fetchCars };
