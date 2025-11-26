import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectFavorites } from "../../redux/favoritesSlice";
import Css from "./CamperCard.module.css";

export default function CamperCard({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    gallery,
    adults,
    engine,
    transmission,
  } = camper;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(String(id));

  const mainImage =
    (Array.isArray(gallery) && (gallery[0]?.original || gallery[0]?.thumb)) ||
    "https://picsum.photos/400/250?campers";

  const [isImageOpen, setIsImageOpen] = useState(false);

  const formattedPrice =
    typeof price === "number" ? price.toFixed(2) : Number(price).toFixed(2);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  const handleOpenImage = () => {
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };

  return (
    <>
      <article className={Css.card}>
        <div className={Css.imageWrap} onClick={handleOpenImage}>
          <img
            src={mainImage}
            alt={name}
            className={Css.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/400/250?campers";
            }}
          />
        </div>

        <div className={Css.content}>
          <div className={Css.headerRow}>
            <h2 className={Css.name}>{name}</h2>

            <div className={Css.priceBlock}>
              <span className={Css.price}>€ {formattedPrice}</span>
              <button
                type="button"
                className={Css.favBtn}
                onClick={handleFavoriteClick}
                aria-pressed={isFavorite}
              >
                <span
                  className={isFavorite ? Css.heartFilled : Css.heartOutline}
                >
                  ♥
                </span>
              </button>
            </div>
          </div>

          <div className={Css.metaRow}>
            <div className={Css.rating}>
              <span className={Css.star}>★</span>
              <span>{rating}</span>
            </div>
            <div className={Css.location}>
              <span className={Css.locationIcon}>📍</span>
              <span>{location}</span>
            </div>
          </div>

          {description && (
            <p className={Css.description}>
              {description.length > 90
                ? description.slice(0, 90) + "..."
                : description}
            </p>
          )}

          <ul className={Css.tags}>
            {adults && <li className={Css.tag}>{adults} adults</li>}
            {transmission && <li className={Css.tag}>{transmission}</li>}
            {engine && <li className={Css.tag}>{engine}</li>}
          </ul>

          <div className={Css.footer}>
            <Link
              to={`/catalog/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={Css.moreBtn}
            >
              Show more
            </Link>
          </div>
        </div>
      </article>

      {/* Resim modalı */}
      {isImageOpen && (
        <div className={Css.modalBackdrop} onClick={handleCloseImage}>
          <div className={Css.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={Css.modalClose}
              onClick={handleCloseImage}
              aria-label="Close image"
            >
              ✕
            </button>
            <img
              src={mainImage}
              alt={name}
              className={Css.modalImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://picsum.photos/1000/600?campers";
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
