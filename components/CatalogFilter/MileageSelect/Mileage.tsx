"use client";
import { useFilterStore } from "@/lib/store/carsStore";

export default function MileageSelect() {
  const { minMileage, setMinMileage, maxMileage, setMaxMileage } =
    useFilterStore();

  return (
    <div>
      <label>Car mileage / km</label>
      <div>
        <input
          type="number"
          placeholder="From"
          value={minMileage}
          onChange={(e) => setMinMileage(e.target.value)}
          min="0"
        />
        <input
          type="number"
          placeholder="To"
          value={maxMileage}
          onChange={(e) => setMaxMileage(e.target.value)}
          min="0"
        />
      </div>
    </div>
  );
}
