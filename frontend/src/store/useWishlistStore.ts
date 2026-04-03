// src/store/useWishlistStore.ts
import { create } from "zustand";
import { Product } from "../types";

interface WishlistState {
  items: Product[];
  toggleWishlist: (product: Product) => void;
}

export const useWishlistStore = create<WishlistState>((set) => ({
  items: [],
  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.items.some((item) => item.product_id === product.product_id);
      if (exists) {
        return { items: state.items.filter((item) => item.product_id !== product.product_id) };
      }
      return { items: [...state.items, product] };
    }),
}));