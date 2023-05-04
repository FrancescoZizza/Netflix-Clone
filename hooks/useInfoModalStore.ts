import { create } from 'zustand';

export interface modalStoreInterface {
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
};

const useInfoModalStore = create <modalStoreInterface> ((set) => ({
 movieId: undefined,
 isOpen: false,
 openModal: (movieId: string) => set ({isOpen: true, movieId}),
 closeModal: () => set({isOpen: false, movieId: undefined}), 
}));

export default useInfoModalStore;