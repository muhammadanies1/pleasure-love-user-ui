import { create } from 'zustand';

const useCartCounter = create((set) => ({
  countCart: 0,
  detailData:[],
  addToCart: (totalCountCart) => set((state) => ({ countCart: state.countCart + totalCountCart })),
  removeCountCart: (updatedCountCart) => set({ countCart: updatedCountCart }),
  addDataToDetailData: (data) => set((state) => ({ detailData: [data, ...state.detailData] }))
}))

export default useCartCounter;