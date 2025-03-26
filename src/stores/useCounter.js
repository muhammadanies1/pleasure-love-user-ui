import { create } from "zustand";

const useCounter = create((set) => ({
  bears: 1,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  resetCount: () => set({ bears: 1 }),
  decreasePopulation: () =>
    set((state) =>
      state.bears > 1 ? { bears: state.bears - 1 } : state
    ),
}))

export default useCounter;