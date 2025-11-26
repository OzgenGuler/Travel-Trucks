import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    location: "",
    vehicleType: "",
    features: [],
    limit: 6,
    page: 1,
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setVehicleType: (state, action) => {
      state.vehicleType = action.payload;
    },
    toggleFeature: (state, action) => {
      const f = action.payload;
      if (state.features.includes(f))
        state.features = state.features.filter((x) => x !== f);
      else state.features.push(f);
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setLocation, setVehicleType, toggleFeature, setPage } =
  filtersSlice.actions;
export default filtersSlice.reducer;
