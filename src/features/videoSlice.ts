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
      console.log('add');
      state.videos.push(action.payload);
    },
    removeVideo: (state, action: PayloadAction<string>) => {
      console.log('remove');
      state.videos.filter((item) => item !== action.payload);
      // state.videos.splice(state.videos.findIndex((item) => item === action.payload), 1);
    },
  },
});

export const { addVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;
