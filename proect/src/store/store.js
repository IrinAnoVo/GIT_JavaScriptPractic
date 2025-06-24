import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice';

const store = configureStore({
  reducer: {
    app: rootReducer
  }
});

export default store;