export default function CarForm() {
  return (
    <form className="booking-form">
      <input name="userName" type="text" placeholder="Name*" />
      <input name="userEmail" type="email" placeholder="Email*" />
      <input name="userText" type="text" placeholder="Booking date" />
      <textarea placeholder="Comment"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
