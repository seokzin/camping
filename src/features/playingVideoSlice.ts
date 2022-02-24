import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/rootReducer';
import { Video } from './store.types';

interface playingVideoState {
  playingVideo: Video | undefined;
  status: 'play' | 'stop';
}

const initialState: playingVideoState = {
  playingVideo: undefined,
  status: 'stop',
};

export const playingVideoSlice = createSlice({
  name: 'playingVideo',
  initialState,
  reducers: {
    playVideo: (state, { payload }: PayloadAction<Video>) => {
      state.playingVideo = payload;
      state.status = 'play';
    },
    stopVideo: (state, { payload }) => {
      state.playingVideo = payload;
      state.status = 'stop';
    },
  },
});

export const { playVideo, stopVideo } = playingVideoSlice.actions;
export const selectPlayingVideo = (state: RootState) => state.playingVideo;
export default playingVideoSlice.reducer;
