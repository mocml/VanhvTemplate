import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Storage } from 'redux-persist';
import { createMMKV } from 'react-native-mmkv';

// 1. Setup MMKV storage adapter for redux-persist
const mmkvInstance = createMMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    mmkvInstance.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key) => {
    const value = mmkvInstance.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key) => {
    mmkvInstance.remove(key);
    return Promise.resolve();
  },
};

// 2. Setup standard root reducer
const rootReducer = combineReducers({
  // Add additional reducers here
});

// 3. Configure persist strategies
const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  // whitelist: ['auth'], // Example whitelist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure Redux Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER', 'persist/FLUSH', 'persist/PAUSE', 'persist/PURGE'],
      },
    }),
});

export const persistor = persistStore(store);

// Export standard types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
