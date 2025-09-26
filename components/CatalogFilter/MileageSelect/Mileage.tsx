"use client";
import { useState } from "react";

export default function MileageSelect() {
  const [fromMileage, setFromMileage] = useState("");
  const [toMileage, setToMileage] = useState("");

  return (
    <div>
      <label>Car mileage / km</label>
      <div>
        <input
          type="number"
          placeholder="From"
          value={fromMileage}
          onChange={(e) => setFromMileage(e.target.value)}
          min="0"
        />
        <input
          type="number"
          placeholder="To"
          value={toMileage}
          onChange={(e) => setToMileage(e.target.value)}
          min="0"
        />
      </div>
    </div>
  );
}
