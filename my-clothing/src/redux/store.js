// store.js
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import userReducer from './user.reducer'; 
import cartReducer from './cart.reducer';

const logger = createLogger({
    serializableCheck: false,
});

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    currentUser: userReducer,
    Cart: cartReducer,
  },
 
});

export default store;
