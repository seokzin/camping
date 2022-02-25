import { combineReducers } from '@reduxjs/toolkit';

import {
  playerSlice as playerReducer,
  playListSlice as playListReducer,
  popularListSlice as popularListReducer,
  searchListSlice as searchListReducer,
} from '@/features';

const rootReducer = combineReducers({
  player: playerReducer,
  playList: playListReducer,
  popularList: popularListReducer,
  searchList: searchListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
