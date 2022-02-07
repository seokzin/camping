import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  videos: string[];
}

const initialState: VideoState = {
  videos: [],
};

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<string>) => {
      state.videos.push(action.payload);
    },
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
