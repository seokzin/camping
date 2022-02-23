import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/rootReducer';
import { Video } from './store.types';

interface playingVideoState {
  playingVideo: Video | undefined;
  isPlaying: boolean;
}

const initialState: playingVideoState = {
  playingVideo: undefined,
  isPlaying: false,
};

export const playingVideoSlice = createSlice({
  name: 'playingVideo',
  initialState,
  reducers: {
    playVideo: (state, { payload }: PayloadAction<Video>) => {
      state.playingVideo = payload;
      state.isPlaying = true;
    },
    stopVideo: (state) => {
      state.playingVideo = undefined;
      state.isPlaying = false;
    },
  },
});

export const { playVideo, stopVideo } = playingVideoSlice.actions;
export const selectPlayingVideo = (state: RootState) => state.playingVideo;
export default playingVideoSlice.reducer;
