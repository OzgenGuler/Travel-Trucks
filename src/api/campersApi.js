// api/campers.js
import axios from "axios";

const API_URL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers";

export const getCampers = async (filters = {}) => {
  const params = new URLSearchParams();

  if (filters.location) params.append("location", filters.location);
  if (filters.type) params.append("form", filters.type);
  if (filters.page) params.append("page", filters.page);
  if (filters.limit) params.append("limit", filters.limit);

  // Özellikler için (AC, kitchen, etc.)
  if (filters.AC) params.append("AC", true);
  if (filters.kitchen) params.append("kitchen", true);
  // diğer özellikler...

  const response = await axios.get(`${API_URL}?${params}`);
  return response.data;
};
