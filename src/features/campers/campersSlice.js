import { createSlice } from "@reduxjs/toolkit";
// import { fetchCampersThunk } from "./campersThunks";
import { loadCampers, loadCamper } from "./campersThunks.js";

// const initialState = {
//   list: [],
//   page: 1,
//   limit: 6,
//   totalCount: 0,
//   status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
// };

// const campersSlice = createSlice({
//   name: "campers",
//   initialState,
//   reducers: {
//     clearCampers(state) {
//       state.list = [];
//       state.page = 1;
//       state.totalCount = 0;
//       state.status = "idle";
//       state.error = null;
//     },
//     incrementPage(state) {
//       state.page += 1;
//     },
//     resetPage(state) {
//       state.page = 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCampersThunk.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(fetchCampersThunk.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         if (action.meta && action.meta.appended) {
//           state.list = [...state.list, ...action.payload.data];
//         } else {
//           state.list = action.payload;
//         }
//         // state.list = [...state.list, ...action.payload.data];
//         // state.totalCount = parseInt(action.payload.totalCount, 10);
//       })
//       .addCase(fetchCampersThunk.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { clearCampers, incrementPage, resetPage } = campersSlice.actions;

// export default campersSlice.reducer;

const initialState = {
  list: [],
  selected: null,
  status: "idle",
  detailStatus: "idle",
  page: 1,
  limit: 6,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearList(state) {
      state.list = [];
      state.page = 1;
    },
    appendPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        // if page === 1 replace, else append
        if (state.page === 1) state.list = action.payload;
        else state.list = [...state.list, ...action.payload];
      })
      .addCase(loadCampers.rejected, (state) => {
        state.status = "failed";
      })

      .addCase(loadCamper.pending, (state) => {
        state.detailStatus = "loading";
      })
      .addCase(loadCamper.fulfilled, (state, action) => {
        state.detailStatus = "succeeded";
        state.selected = action.payload;
      })
      .addCase(loadCamper.rejected, (state) => {
        state.detailStatus = "failed";
      });
  },
});

export const { clearList, appendPage } = campersSlice.actions;
export default campersSlice.reducer;
