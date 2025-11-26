import React, { useEffect } from "react";
import { loadCampers } from "../redux/camperThunks.js";
import {
  setLocation,
  setVehicleType,
  toggleFeature,
  setPage,
} from "../redux/filtersSlice.js";
import { appendPage } from "../redux/campersSlice.js";
import CamperCard from "../components/CamperCard.jsx";
import { useDispatch, useSelector } from "react-redux";

export default function Catalog() {
  const dispatch = useDispatch();
  const filters = useSelector((s) => s.filters);
  const status = useSelector((s) => s.campers.status);

  useEffect(() => {
    // build params for backend filtering
    const params = {
      page: filters.page,
      limit: filters.limit,
      location: filters.location || undefined,
      vehicleType: filters.vehicleType || undefined,
      features: filters.features.length
        ? filters.features.join(",")
        : undefined,
    };
    dispatch(loadCampers({ params }));
  }, [
    dispatch,
    filters.page,
    filters.location,
    filters.vehicleType,
    filters.features,
    filters.limit,
  ]);

  const loadMore = () => {
    // increment page in campers slice and filters
    dispatch(appendPage());
    dispatch(setPage(filters.page + 1));
  };

  return (
    <main className="p-6">
      <h2 className="text-2xl mb-4">Katalog</h2>
      <section className="flex gap-6">
        <aside className="w-64 p-4 border rounded">
          <h3 className="font-semibold mb-2">Filtreler</h3>
          <label className="block mb-2">
            Konum
            <input
              className="w-full mt-1 p-1 border"
              value={filters.location}
              onChange={(e) => dispatch(setLocation(e.target.value))}
            />
          </label>

          <div className="mt-3">
            <div>Araç Tipi</div>
            <select
              value={filters.vehicleType}
              onChange={(e) => dispatch(setVehicleType(e.target.value))}
              className="w-full mt-1 p-1 border"
            >
              <option value="">Tümü</option>
              <option value="van">Van</option>
              <option value="motorhome">Motorhome</option>
              <option value="camper">Camper</option>
            </select>
          </div>

          <div className="mt-3">
            <div>Özellikler</div>
            {["ac", "kitchen", "bathroom", "tv", "fridge"].map((f) => (
              <label key={f} className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={filters.features.includes(f)}
                  onChange={() => dispatch(toggleFeature(f))}
                />
                <span className="capitalize">{f}</span>
              </label>
            ))}
          </div>
        </aside>

        <section className="flex-1">
          {status === "loading" && <div>Yükleniyor...</div>}
          <div className="grid grid-cols-3 gap-4">
            {/* {campers.map((c) => (
              <CamperCard key={c.id} camper={c} />
            ))} */}
          </div>

          <div className="mt-4 text-center">
            <button onClick={loadMore} className="px-4 py-2 border rounded">
              Load More
            </button>
          </div>
        </section>
      </section>
    </main>
  );
}
