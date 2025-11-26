import { toast } from "react-toastify";
import React, { useState } from "react";

export default function ReservationForm({ camperId }) {
  const [form, setForm] = useState({ name: "", email: "", start: "", end: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Bu örnekte rezervasyon backend'e gönderilmiyor. Gerçek backend varsa POST isteği gönder.
  //   console.log("reservation", { camperId, ...form });
  //   toast.success("Rezervasyon başarıyla oluşturuldu!");
  //   setForm({ name: "", email: "", start: "", end: "" });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("reservation", { camperId, ...form });
    // Form verilerini işle
    toast.success("Booking successful! We will contact you soon.");
    // veya daha iyi bir toast/notification kütüphanesi kullanın
    setForm({ name: "", email: "", start: "", end: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded">
      <h4 className="font-semibold mb-2">Rezervasyon Yap</h4>
      <input
        name="name"
        placeholder="Ad"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 mb-2 border"
      />
      <input
        name="email"
        placeholder="E-posta"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 mb-2 border"
      />
      <label className="block mb-1">Başlangıç</label>
      <input
        name="start"
        type="date"
        value={form.start}
        onChange={handleChange}
        className="w-full p-2 mb-2 border"
      />
      <label className="block mb-1">Bitiş</label>
      <input
        name="end"
        type="date"
        value={form.end}
        onChange={handleChange}
        className="w-full p-2 mb-2 border"
      />
      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-white rounded"
      >
        Rezervasyon Gönder
      </button>
    </form>
  );
}
