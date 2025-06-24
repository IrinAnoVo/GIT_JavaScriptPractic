import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    discount: 5
  },
  reducers: {
    setDiscount: (state, action) => {
      state.discount = action.payload;
    }
  }
});

export const { setDiscount } = appSlice.actions;
export default appSlice.reducer;