import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useBookStore = create(persist(
  (set, get) => ({
    stateupdate:  JSON.parse(localStorage.getItem('book-store-storage')) || [],
    toggleSidebar: (additem) => set((state) => ({
      stateupdate: [...state.stateupdate, { ...additem }],
    })),
    removeUser: (removeitem) => set((state) => ({
      stateupdate:state.stateupdate.filter((item) => item.First !== removeitem),
    })),
  }),
  {
    name: 'book-store-storage', 
    getStorage: () => localStorage,
    serialize: (state) => JSON.stringify(state),
    deserialize: (str) => JSON.parse(str),
  }
));

export default useBookStore;
