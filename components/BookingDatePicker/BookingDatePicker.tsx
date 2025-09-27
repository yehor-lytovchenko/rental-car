"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingDatePicker() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateChange = () => {
    // setSelectedDate(date);
  };

  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd.MM.yyyy"
      minDate={new Date()}
    />
  );
}
