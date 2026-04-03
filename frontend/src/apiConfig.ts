// src/config/apiConfig.ts
const API_BASE_URL = "http://localhost:8000"; // GANTI ke IP laptop kamu kalau buka dari HP Android

export const apiConfig = {
  baseURL: API_BASE_URL,
@  auth: `${API_BASE_URL}/auth`,
  products: `${API_BASE_URL}/products`,
  cart: `${API_BASE_URL}/cart`,
  wishlist: `${API_BASE_URL}/wishlist`,
  ratings: `${API_BASE_URL}/ratings`,
};