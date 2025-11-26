import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <section className="max-w-4xl p-8">
        <h1 className="text-4xl font-bold mb-4">Campers of your dreams </h1>
        <p className="mb-6">You can find everything you want in our catalog </p>
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
