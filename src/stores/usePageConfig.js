import { create } from "zustand";

const usePageConfig = create((set) => ({
  isShowBtnInDetail: "hidden",
  showBtnInDetail: () => set({ isShowBtnInDetail: "block" }),
  hideBtnInDetail: () => set({ isShowBtnInDetail: "hidden" }),
}))

export default usePageConfig;