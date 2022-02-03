import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
};

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideos: (state, { payload }) => {
      state.videos = payload;
    },
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
