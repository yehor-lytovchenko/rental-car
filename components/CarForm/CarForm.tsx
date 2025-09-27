"use client";
import { useFormDraftStore } from "@/lib/store/formStore";
import BookingDatePicker from "../BookingDatePicker/BookingDatePicker";

export default function CarForm() {
  const { draft, setDraft, clearDraft } = useFormDraftStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearDraft();
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setDraft({
      ...draft,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="userName"
        type="text"
        value={draft.userName}
        placeholder="Name*"
      />
      <input
        onChange={handleChange}
        name="userEmail"
        type="email"
        value={draft.userEmail}
        placeholder="Email*"
      />
      <BookingDatePicker />
      <textarea
        name="userText"
        onChange={handleChange}
        value={draft.userText}
        placeholder="Comment"
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
