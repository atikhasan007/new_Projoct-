import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Corrected import

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
});
