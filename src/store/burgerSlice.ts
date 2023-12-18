import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
};

const burgerSlice = createSlice({
  name: 'burger',
  initialState,
  reducers: {
    switchActive: (state) => {
      state.active === false ? (state.active = true) : (state.active = false);
    },
  },
});

export const { actions } = burgerSlice;
export default burgerSlice.reducer;
