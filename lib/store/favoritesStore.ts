import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoritesState {
  favorites: string[];
  toggleFavorite: (carId: string) => void;
  clearFavorites: () => void;
}

const favoritesStorage: string[] = [];

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: favoritesStorage,
      toggleFavorite: (carId: string) =>
        set((state) => {
          const newFavorites = new Set(state.favorites);
          if (newFavorites.has(carId)) {
            newFavorites.delete(carId);
          } else {
            newFavorites.add(carId);
          }
          return { favorites: Array.from(newFavorites) };
        }),
      clearFavorites: () => set({ favorites: [] }),
    }),
    {
      name: "favorite-cars",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
