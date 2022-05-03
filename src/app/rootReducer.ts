import { combineReducers } from '@reduxjs/toolkit';

import {
  popularListSlice as popularListReducer,
  searchListSlice as searchListReducer,
} from '@/features';
import playerReducer from '@/features/player/playerSlice';
import playListReducer from '@/features/playList/playListSlice';

const rootReducer = combineReducers({
  player: playerReducer,
  playList: playListReducer,
  popularList: popularListReducer,
  searchList: searchListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
