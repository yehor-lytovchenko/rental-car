// store.js
import { create } from "zustand";

interface FilterState {
  brand: string;
  rentalPrice: string;
  minMileage: string;
  maxMileage: string;
}

interface FilterActions {
  setBrand: (brand: string) => void;
  setRentalPrice: (rentalPrice: string) => void;
  setMinMileage: (minMileage: string) => void;
  setMaxMileage: (maxMileage: string) => void;
  resetFilters: () => void;
}

const initialState: FilterState = {
  brand: "",
  rentalPrice: "",
  minMileage: "",
  maxMileage: "",
};

export const useFilterStore = create<FilterState & FilterActions>()((set) => ({
  ...initialState,

  setBrand: (brand) => set({ brand }),
  setRentalPrice: (rentalPrice) => set({ rentalPrice }),
  setMinMileage: (minMileage) => set({ minMileage }),
  setMaxMileage: (maxMileage) => set({ maxMileage }),

  resetFilters: () => set(initialState),
}));
