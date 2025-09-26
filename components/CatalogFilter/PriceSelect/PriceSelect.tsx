"use client";
import Select, { SingleValue } from "react-select";
import css from "./PriceSelect.module.css";
import { OptionType } from "@/types/options";
import { useFilterStore } from "@/lib/store/carsStore";

export default function PriceSelect() {
  const { rentalPrice, setRentalPrice } = useFilterStore();

  const options = [
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
  ];

  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    setRentalPrice(selectedOption ? selectedOption.value : "");
  };

  const selectedOption =
    options.find((option) => option.value === rentalPrice) || null;

  return (
    <Select value={selectedOption} options={options} onChange={handleChange} />
  );
}
