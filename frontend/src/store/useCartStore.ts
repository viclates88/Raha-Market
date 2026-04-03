// src/store/useCartStore.ts
import { create } from "zustand";
import { Product } from "../types";

interface CartState {
  items: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product_id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
  removeFromCart: (product_id) => set((state) => ({ items: state.items.filter((p) => p.product_id !== product_id) })),
  clearCart: () => set({ items: [] }),
}));