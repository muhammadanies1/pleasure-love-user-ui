import { create } from 'zustand';

const useCartCounter = create((set) => ({
  countCart: 0,
  addToCart: (totalCountCart) => set({ countCart: totalCountCart }),
  removeCountCart: (updatedCountCart) => set({ countCart: updatedCountCart }),
}))

export default useCartCounter;