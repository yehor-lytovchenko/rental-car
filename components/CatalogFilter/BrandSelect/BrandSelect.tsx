"use client";
import { getBrands } from "@/lib/api/clientApi";
import { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import css from "./BrandSelect.module.css";

interface OptionType {
  value: string;
  label: string;
}

export default function BrandSelect() {
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getBrands();
      setBrands(data);
    }

    fetchData();
  }, []);

  const options = brands.map((brand) => ({
    value: brand,
    label: brand,
  }));

  const handleChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedOption(selectedOption);
  };

  return (
    <Select value={selectedOption} options={options} onChange={handleChange} />
  );
}
