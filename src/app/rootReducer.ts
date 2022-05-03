import { combineReducers } from '@reduxjs/toolkit';

import {
  playListSlice as playListReducer,
  popularListSlice as popularListReducer,
  searchListSlice as searchListReducer,
} from '@/features';
import playerReducer from '@/features/player/playerSlice';

const rootReducer = combineReducers({
  player: playerReducer,
  playList: playListReducer,
  popularList: popularListReducer,
  searchList: searchListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
