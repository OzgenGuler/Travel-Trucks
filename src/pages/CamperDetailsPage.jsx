import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadCampers } from "../redux/camperThunks.js";
import ReservationForm from "../components/ReservationForm";

export default function CamperDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selected = useSelector((s) => s.campers.selected);
  const status = useSelector((s) => s.campers.detailStatus);

  useEffect(() => {
    dispatch(loadCampers(id));
  }, [dispatch, id]);

  if (status === "loading") return <div className="p-6">Loading...</div>;
  if (!selected) return <div className="p-6">İlan bulunamadı.</div>;

  return (
    <main className="p-6">
      <h2 className="text-2xl mb-4">{selected.name}</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <img
            src={selected.image || selected.images?.[0] || ""}
            alt={selected.name}
            className="w-full h-72 object-cover rounded"
          />
          <p className="mt-4">{selected.description}</p>
        </div>
        <aside>
          <div className="mb-4">
            Fiyat: {Number(selected.price).toFixed(2)} ₺
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Özellikler</h4>
            <ul className="list-disc ml-5">
              {selected.features &&
                Object.entries(selected.features).map(([k, v]) => (
                  <li key={k}>
                    {k}: {String(v)}
                  </li>
                ))}
            </ul>
          </div>

          <ReservationForm camperId={selected.id} />
        </aside>
      </div>

      <section className="mt-6">
        <h3>Yorumlar</h3>
        {/* Basit mock yorumlar - gerçek backend yoksa burada local mock kullan */}
        <div className="mt-2">(Kullanıcı yorumları:)</div>
      </section>
    </main>
  );
}
