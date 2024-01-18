// store.js
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import userReducer from './user.reducer'; 
import cartReducer from './cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopDataReducer from './shop-data/shop-data.reducer';

const logger = createLogger({
    serializableCheck: false,
});

// Configuration for redux-persist
const cartPersistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['Cart']
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        currentUser: userReducer,
        Cart: persistedCartReducer, // Use the persisted reducer for the cart
        directory: directoryReducer,
        shop_Data:shopDataReducer,
    },
});

export const persistor = persistStore(store);
