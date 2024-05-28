import { create } from "zustand";

const bookStore = (set, get) => ({
  stateupdate: false,
  toggleSidebar: () => set((state) => ({ stateupdate: !state.stateupdate, })),

});

const useBookStore = create(bookStore);

export default useBookStore;
