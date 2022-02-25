import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/rootReducer';
import { Video } from './store.types';

interface playerState {
  playingVideo: Video | undefined;
  status: 'play' | 'stop';
}

const initialState: playerState = {
  playingVideo: undefined,
  status: 'stop',
};

export const playerSlice = createSlice({
  name: 'player',
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

export const { playVideo, stopVideo } = playerSlice.actions;
export const selectPlayer = (state: RootState) => state.player;
export default playerSlice.reducer;
