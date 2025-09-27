"use client";
import { useFilterStore } from "@/lib/store/carsStore";
import css from "./Mileage.module.css";

export default function MileageSelect() {
  const { minMileage, setMinMileage, maxMileage, setMaxMileage } =
    useFilterStore();

  const formatNumber = (value: string): string => {
    if (!value) return "";
    const numericValue = value.replace(/\D/g, "");
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleMinMileageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/[^\d\s]/g, "");
    const numericValue = cleanValue.replace(/\s/g, "");
    setMinMileage(numericValue);
  };

  const handleMaxMileageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanValue = inputValue.replace(/[^\d\s]/g, "");
    const numericValue = cleanValue.replace(/\s/g, "");
    setMaxMileage(numericValue);
  };

  return (
    <div className={css.container}>
      <label className={css.label}>Car mileage / km</label>
      <div className={css.inputGroup}>
        <div className={css.inputWrapper}>
          <input
            type="text"
            value={formatNumber(minMileage)}
            onChange={handleMinMileageChange}
            className={css.input}
          />
          <label className={css.floatingLabel}>From</label>
        </div>
        <div className={css.inputWrapper}>
          <input
            type="text"
            value={formatNumber(maxMileage)}
            onChange={handleMaxMileageChange}
            className={css.input}
          />
          <label className={css.floatingLabel}>To</label>
        </div>
      </div>
    </div>
  );
}
