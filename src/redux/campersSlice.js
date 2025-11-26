import { createSlice } from "@reduxjs/toolkit";
import { loadCampers } from "./camperThunks.js";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    list: [],
    status: "idle",
    page: 1,
    limit: 6,
  },
  reducers: {
    clearList: (state) => {
      state.list = [];
      state.page = 1;
    },
    appendPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCampers.fulfilled, (state, action) => {
        state.list = [...state.list, ...action.payload];
        state.status = "succeeded";
      })
      .addCase(loadCampers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { clearList, appendPage } = campersSlice.actions;
export default campersSlice.reducer;
