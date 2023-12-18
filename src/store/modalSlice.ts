import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard } from '../types/card';
import { IModalState } from '../types/modalCard';

const initialState: IModalState = {
  isOpen: false,
  selectedCard: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ICard>) => {
      state.isOpen = true;
      state.selectedCard = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedCard = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
