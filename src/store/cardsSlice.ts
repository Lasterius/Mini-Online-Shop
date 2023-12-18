import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICard, ICardsState } from '../types/card';
import {
  loadCardsByCategory,
  resetSelectedCategory,
  setCategoryCards,
} from './categorySlice';

let allCards: ICard[] = [];

const initialState: ICardsState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload;
      allCards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setCategoryCards, (state) => {
        state.cards = [];
      })
      .addCase(loadCardsByCategory.fulfilled, (state) => {
        state.cards = [];
      })
      .addCase(resetSelectedCategory, (state) => {
        state.cards = allCards;
      });
  },
});

export const { setCards } = cardsSlice.actions;
export default cardsSlice.reducer;
