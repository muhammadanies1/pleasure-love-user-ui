import { create } from "zustand";

const useDetailProduct = create((set) => ({
  detailProduct: undefined,
  setDataDetail: (detail) => set({ detailProduct: detail }),
}))

export default useDetailProduct;