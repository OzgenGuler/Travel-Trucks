import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   location: "",
//   vehicleType: "",
//   features: [],
//   page: 1,
//   limit: 6,
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     setLocation(state, action) {
//       state.location = action.payload;
//       state.page = 1;
//     },
//     setVehicleType(state, action) {
//       state.vehicleType = action.payload;
//       state.page = 1;
//     },
//     toggleFeature(state, action) {
//       const feat = action.payload;
//       state.page = 1;
//       if (state.features.includes(feat)) {
//         state.features = state.features.filter((f) => f !== feat);
//       } else {
//         state.features.push(feat);
//       }
//     },
//     setPage(state, action) {
//       state.page = action.payload;
//     },
//   },
// });
// export const { setLocation, setVehicleType, toggleFeature, setPage } =
//   filtersSlice.actions;
// export default filtersSlice.reducer;

const initialState = {
  location: "",
  vehicleType: "",
  features: [],
  page: 1,
  limit: 6,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
      state.page = 1;
    },
    setVehicleType(state, action) {
      state.vehicleType = action.payload;
      state.page = 1;
    },
    toggleFeature(state, action) {
      const f = action.payload;
      state.page = 1;
      if (state.features.includes(f))
        state.features = state.features.filter((x) => x !== f);
      else state.features.push(f);
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const { setLocation, setVehicleType, toggleFeature, setPage } =
  filtersSlice.actions;
export default filtersSlice.reducer;
