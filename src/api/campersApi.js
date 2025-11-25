import axios from "axios";
const API_BASE_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const fetchCampers = (params = {}) => {
  // Backend filtreleme yapmalı; frontend filtreleri query string'e çevir.
  return axiosInstance.get("/campers", { params });
};

export const fetchCamperById = (id) => {
  return axiosInstance.get(`/campers/${id}`);
};
