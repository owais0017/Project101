// store.js
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import userReducer from './user.reducer'; 

const logger = createLogger({
    serializableCheck: false,
});

const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    currentUser: userReducer,
  },
});

export default store;
