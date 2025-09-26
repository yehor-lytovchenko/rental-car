"use client";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import css from "./PriceSelect.module.css";

interface OptionType {
  value: string;
  label: string;
}

export default function PriceSelect() {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const options = [
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
    { value: "70", label: "70" },
    { value: "80", label: "80" },
  ];

  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select value={selectedOption} options={options} onChange={handleChange} />
  );
}
