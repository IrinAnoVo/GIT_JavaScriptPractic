import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../store/features/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  }
});

export default store;