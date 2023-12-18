import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFiltersState } from '../types/filter';

const initialState: IFiltersState = {
  priceRange: { min: 0, max: 0 },
  sortByPopularity: false,
  sortByRating: false,
  isOpen: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setPriceRangeFilter: (
      state,
      action: PayloadAction<{ min: number; max: number }>
    ) => {
      state.priceRange = action.payload;
    },
    setSortByPopularity: (state, action: PayloadAction<boolean>) => {
      state.sortByPopularity = action.payload;
    },
    setSortByRating: (state, action: PayloadAction<boolean>) => {
      state.sortByRating = action.payload;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    resetModal: (state) => {
      state.isOpen = false;
      state.priceRange = { min: 0, max: 0 };
      state.sortByPopularity = false;
      state.sortByRating = false;
    },
  },
});

export const {
  setPriceRangeFilter,
  setSortByPopularity,
  setSortByRating,
  openModal,
  closeModal,
  resetModal,
} = filtersSlice.actions;
export default filtersSlice.reducer;
