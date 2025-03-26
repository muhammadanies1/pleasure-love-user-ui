import { create } from "zustand";

const usePushCart = create((set) => ({
  isDrawerPushCartOpen: false,
  open: () => set({ isDrawerPushCartOpen: true }),
  close: () => set({ isDrawerPushCartOpen: false }),
}))

export default usePushCart;