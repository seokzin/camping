import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import videoReducer from './videoSlice';

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
