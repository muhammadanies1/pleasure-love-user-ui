import { create } from "zustand";

const useRingkasanPembelian = create((set) => ({
  ringkasan: undefined,
  set: (data) => set((state) => ({ ringkasan: data })),
}))

export default useRingkasanPembelian;