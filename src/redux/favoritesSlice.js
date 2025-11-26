// redux/favoritesSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const loadFavorites = () => {
//   const saved = localStorage.getItem("favorites");
//   return saved ? JSON.parse(saved) : [];
// };

// const favoritesSlice = createSlice({
//   name: "favorites",
//   initialState: loadFavorites(),
//   reducers: {
//     toggleFavorite: (state, action) => {
//       const id = action.payload;
//       const index = state.indexOf(id);

//       if (index > -1) {
//         state.splice(index, 1);
//       } else {
//         state.push(id);
//       }

//       localStorage.setItem("favorites", JSON.stringify(state));
//     },
//   },
// });
// export const { toggleFavorite } = favoritesSlice.actions;
// export default favoritesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const local = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { list: local },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;
      if (state.list.includes(id)) {
        state.list = state.list.filter((x) => x !== id);
      } else {
        state.list.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.list));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
