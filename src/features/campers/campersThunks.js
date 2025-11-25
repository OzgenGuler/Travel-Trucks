import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "../../api/campersApi";

// export const fetchCampersThunk = createAsyncThunk(
//   "campers/fetchCampers",
//   async ({ param }, thunkAPI) => {
//     const response = await fetchCampers(param);
//     return response.data;
//   },
//   {
//     condition: (arg, { getState }) => {
//       return true;
//     },
//   }
// );

export const loadCampers = createAsyncThunk(
  "campers/loadCampers",
  async ({ params }, thunkAPI) => {
    const res = await fetchCampers(params);
    return res.data;
  }
);

export const loadCamper = createAsyncThunk("campers/loadCamper", async (id) => {
  const res = await fetchCamperById(id);
  return res.data;
});
