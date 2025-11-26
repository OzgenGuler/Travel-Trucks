// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   addFavorite,
// //   removeFavorite,
// // } from "../features/favorites/favoritesSlice";
// // import { formatPrice } from "../utils/formatters";
// // import { Link } from "react-router-dom";

// // export default function CamperCard({ camper }) {
// //   const dispatch = useDispatch();
// //   const favorites = useSelector((s) => s.favorites.list);
// //   const isFav = favorites.includes(camper.id);

// //   const toggleFav = () => {
// //     if (isFav) dispatch(removeFavorite(camper.id));
// //     else dispatch(addFavorite(camper.id));
// //   };

// //   return (
// //     <article className="card">
// //       <img src={camper.image} alt={camper.name} />
// //       <h3>{camper.name}</h3>
// //       <p>{camper.location}</p>
// //       <p>{formatPrice(camper.price)} ₺</p>
// //       <div>
// //         <button onClick={toggleFav} style={{ cursor: "pointer" }}>
// //           {isFav ? "♥" : "♡"}
// //         </button>
// //         <a href={`/catalog/${camper.id}`} target="_blank" rel="noreferrer">
// //           Show More
// //         </a>
// //       </div>
// //     </article>
// //   );
// // }
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addFavorite,
//   removeFavorite,
// } from "../features/favorites/favoritesSlice";

// export default function CamperCard({ camper }) {
//   const dispatch = useDispatch();
//   const favs = useSelector((s) => s.favorites.list);
//   const isFav = favs.includes(camper.id);

//   return (
//     <article className="border rounded p-3">
//       <img
//         src={camper.image}
//         alt={camper.name}
//         className="w-full h-40 object-cover rounded"
//       />
//       <h4 className="mt-2 font-semibold">{camper.name}</h4>
//       <p className="text-sm">{camper.location}</p>
//       <p className="mt-1 font-medium">{Number(camper.price).toFixed(2)} ₺</p>
//       <div className="mt-2 flex items-center justify-between">
//         <button
//           onClick={() =>
//             isFav
//               ? dispatch(removeFavorite(camper.id))
//               : dispatch(addFavorite(camper.id))
//           }
//         >
//           {isFav ? "♥" : "♡"}
//         </button>
//         <a
//           href={`/catalog/${camper.id}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-sm underline"
//         >
//           Show More
//         </a>
//       </div>
//     </article>
//   );
// }
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice.js";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function CamperCard({ camper }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.list);

  const isFav = favorites.includes(camper.id);

  return (
    <div className="border rounded p-4">
      <img
        src={camper.images[0]}
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="text-xl mt-2">{camper.name}</h3>
      <p className="text-gray-600">{camper.price.toFixed(2)}$</p>

      <button
        className="mt-2"
        onClick={() => dispatch(toggleFavorite(camper.id))}
      >
        {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </button>

      <Link
        to={`/catalog/${camper.id}`}
        target="_blank"
        className="block mt-3 underline text-blue-600"
      >
        Show More
      </Link>
    </div>
  );
}
