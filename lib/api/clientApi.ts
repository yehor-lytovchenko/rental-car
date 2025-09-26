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
});

async function fetchCars(params?: FetchCarsParams): Promise<FetchCarsResponse> {
  const { data } = await api.get<FetchCarsResponse>("/cars", {
    params: {
      limit: 12,
      ...params,
    },
  });
  return data;
}
async function getBrands(): Promise<string[]> {
  const { data } = await api.get<string[]>("/brands");
  return data;
}

export { fetchCars, getBrands };
