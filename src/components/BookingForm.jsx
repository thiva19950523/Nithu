import { useState } from "react";
import axios from "axios";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitForm = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/book", form);
    alert("Booking request sent!");
  };

  return (
    <section className="p-10 bg-gray-900">
      <h2 className="text-3xl mb-6 text-red-500">Book a Session</h2>

      <form onSubmit={submitForm} className="max-w-md space-y-4">
        <input
          className="w-full p-2 text-black"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="w-full p-2 text-black"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="date"
          className="w-full p-2 text-black"
          name="date"
          onChange={handleChange}
        />
        <textarea
          className="w-full p-2 text-black"
          name="message"
          placeholder="Tattoo idea"
          onChange={handleChange}
        />

        <button className="bg-red-500 px-6 py-2 rounded">
          Book Now
        </button>
      </form>
    </section>
  );
}
