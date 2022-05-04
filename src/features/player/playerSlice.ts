import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { Video } from '@/features/store.types';

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
    setVideo: (state, { payload }: PayloadAction<Video>) => {
      console.log('set', payload);
      state.playingVideo = payload;
      state.status = 'stop';
    },
    playVideo: (state, { payload }: PayloadAction<Video>) => {
      console.log('play', payload);
      state.status = 'play';
    },
    stopVideo: (state, { payload }) => {
      console.log('stop', payload);
      state.status = 'stop';
    },
  },
});

export const { setVideo, playVideo, stopVideo } = playerSlice.actions;
export default playerSlice.reducer;
