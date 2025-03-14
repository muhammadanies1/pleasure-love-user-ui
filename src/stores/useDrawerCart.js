import { create } from "zustand";

const useDrawerCart = create((set) => ({
  isDrawerCartOpen: false,
  open: () => set({ isDrawerCartOpen: true }),
  close: () => set({ isDrawerCartOpen: false }),
}))

export default useDrawerCart;