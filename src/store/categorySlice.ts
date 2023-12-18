import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICard } from '../types/card';
import { ICategoryState } from '../types/category';

export const loadCategories = createAsyncThunk(
  'product/loadCategories',
  async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    return response.data;
  }
);

export const loadCardsByCategory = createAsyncThunk<ICard[], string>(
  'product/loadCardsByCategory',
  async (categoryName) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    return response.data;
  }
);

const initialState: ICategoryState = {
  categories: [],
  selectedCategory: null,
  cards: [],
  isOpen: false,
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<string | null>) => {
      state.selectedCategory = action.payload;
    },
    resetSelectedCategory: (state) => {
      state.selectedCategory = null;
      state.cards = [];
    },
    setCategoryCards: (state, action: PayloadAction<ICard[]>) => {
      state.cards = action.payload;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(loadCardsByCategory.fulfilled, (state, action) => {
      state.cards = action.payload;
    });
  },
});

export const {
  setCategories,
  setSelectedCategory,
  resetSelectedCategory,
  setCategoryCards,
  openModal,
  closeModal,
} = categorySlice.actions;
export default categorySlice.reducer;
