import { configureStore } from '@reduxjs/toolkit';
import { itemsReducer } from './slices/itemsSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { filtersReducer } from './slices/filterSlice';

const persistConfig = {
  key: 'items',
  storage,
};

export const store = configureStore({
  reducer: {
    items: persistReducer(persistConfig, itemsReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
