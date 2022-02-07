import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  nowVideo: string;
  videos: string[];
}

const initialState: VideoState = {
  nowVideo: '',
  videos: [],
};

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.videos.push(action.payload);
    },
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
