import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

import type { Video } from '@/features/store.types';

interface playListState {
  playList: Video[];
  playingVideo?: Video;
}

const initialState: playListState = {
  playList: [],
};

export const playListSlice = createSlice({
  name: 'playList',
  initialState,
  reducers: {
    addVideo: (state, { payload }: PayloadAction<Video>) => {
      if (!current(state.playList).some((video) => video.id === payload.id)) {
        state.playList.push(payload);
      }
    },
    removeVideo: (state, { payload }: PayloadAction<Video>) => {
      state.playList = state.playList.filter((item) => item.id !== payload.id);
    },
    setVideo: (state, { payload }: PayloadAction<Video>) => {
      state.playingVideo = payload;
    },
  },
});

export const { addVideo, removeVideo, setVideo } = playListSlice.actions;
export default playListSlice.reducer;
