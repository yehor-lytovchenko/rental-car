"use client";
import { getBrands } from "@/lib/api/clientApi";
import { useState, useEffect } from "react";
import Select, { SingleValue } from "react-select";
import css from "./BrandSelect.module.css";
import { useFilterStore } from "@/lib/store/carsStore";
import { OptionType } from "@/types/options";

export default function BrandSelect() {
  const [brands, setBrands] = useState<string[]>([]);
  const { brand, setBrand } = useFilterStore();

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
    setBrand(selectedOption ? selectedOption.value : "");
  };

  const selectedOption =
    options.find((option) => option.value === brand) || null;

  return (
    <Select
      value={selectedOption}
      options={options}
      onChange={handleChange}
      placeholder="Choose a brand"
    />
  );
}
