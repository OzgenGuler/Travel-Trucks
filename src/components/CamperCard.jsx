import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
import { formatPrice } from "../utils/formatters";
import { Link } from "react-router-dom";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.list);
  const isFav = favorites.includes(camper.id);

  const toggleFav = () => {
    if (isFav) dispatch(removeFavorite(camper.id));
    else dispatch(addFavorite(camper.id));
  };

  return (
    <article className="card">
      <img src={camper.image} alt={camper.name} />
      <h3>{camper.name}</h3>
      <p>{camper.location}</p>
      <p>{formatPrice(camper.price)} ₺</p>
      <div>
        <button onClick={toggleFav} style={{ cursor: "pointer" }}>
          {isFav ? "♥" : "♡"}
        </button>
        <a href={`/catalog/${camper.id}`} target="_blank" rel="noreferrer">
          Show More
        </a>
      </div>
    </article>
  );
}
