import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <section className="max-w-4xl p-8">
        <h1 className="text-4xl font-bold mb-4">
          TravelTrucks — Karavan Kiralama
        </h1>
        <p className="mb-6">
          En uygun karavanları keşfedin. Hemen rezervasyon yapın.
        </p>
        <button
          onClick={() => nav("/catalog")}
          className="px-6 py-3 bg-blue-600 text-white rounded shadow"
        >
          View Now
        </button>
      </section>
    </main>
  );
}
