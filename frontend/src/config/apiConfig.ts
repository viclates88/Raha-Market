// src/config/apiConfig.ts
const API_BASE_URL = "http://localhost:8000";   // ganti IP kalau dari HP Android

export const api = {
  baseURL: API_BASE_URL,
  products: `${API_BASE_URL}/products`,
  auth: `${API_BASE_URL}/auth`,
  cart: `${API_BASE_URL}/cart`,
  wishlist: `${API_BASE_URL}/wishlist`,
  // tambah sendiri nanti
};
