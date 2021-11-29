import create from "zustand";
type useProgressStoreType = {
  isAnimating: boolean;
  setIsAnimating: (isAnimating: boolean) => void;
};
export const useProgressStore = create<useProgressStoreType>((set) => ({
  isAnimating: false,
  setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
}));
