import { combineReducers } from '@reduxjs/toolkit';

import playListReducer from '@/features/playList/playListSlice';
import popularListReducer from '@/features/popularList/popularListSlice';
import searchListReducer from '@/features/searchList/searchListSlice';

const rootReducer = combineReducers({
  playList: playListReducer,
  popularList: popularListReducer,
  searchList: searchListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
