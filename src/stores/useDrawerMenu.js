import { create } from "zustand";

const useDrawerMenu = create((set) => ({
  isDrawerMenuOpen: false,
  open: () => set({ isDrawerMenuOpen: true }),
  close: () => set({ isDrawerMenuOpen: false }),
}))

export default useDrawerMenu;