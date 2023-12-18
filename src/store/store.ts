import { configureStore } from '@reduxjs/toolkit';
import burgerReducer from './burgerSlice';
import cardsReducer from './cardsSlice';
import categoryReducer from './categorySlice';
import filterReducer from './filterSlice';
import modalReducer from './modalSlice';
import searchReducer from './searchSlice';
import themeReducer from './themeSlice';

const store = configureStore({
  reducer: {
    burger: burgerReducer,
    theme: themeReducer,
    cards: cardsReducer,
    modal: modalReducer,
    category: categoryReducer,
    search: searchReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
