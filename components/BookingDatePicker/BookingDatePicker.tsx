"use client";
import { useFormDraftStore } from "@/lib/store/formStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingDatePicker.module.css";

export default function BookingDatePicker() {
  const { draft, setDraft } = useFormDraftStore();

  const handleDateChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toLocaleDateString("uk-UA");

      setDraft({
        ...draft,
        userDate: formattedDate,
      });
    }
  };

  const selectedDate = draft.userDate
    ? new Date(draft.userDate.split(".").reverse().join("-"))
    : null;

  return (
    <DatePicker
      className={css.date}
      selected={selectedDate}
      onChange={handleDateChange}
      dateFormat="dd.MM.yyyy"
      minDate={new Date()}
      placeholderText="Booking date"
    />
  );
}
