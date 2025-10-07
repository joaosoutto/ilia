import { create } from "zustand";

interface IStoreState {
  setState: (key: string, data: object) => void;
}

const initialState = {};

const useStore = create<IStoreState>((set) => ({
  ...initialState,
  setState: (key: string, data: object) => {
    set((state) => ({ ...state, [key]: data }));
  },
}));

export default useStore;
