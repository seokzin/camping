import { combineReducers } from '@reduxjs/toolkit';

import {
  playingVideoSlice as playingVideoReducer,
  playListSlice as playListReducer,
  popularListSlice as popularListReducer,
  searchListSlice as searchListReducer,
} from '@/features';

const rootReducer = combineReducers({
  playingVideo: playingVideoReducer,
  playList: playListReducer,
  popularList: popularListReducer,
  searchList: searchListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
