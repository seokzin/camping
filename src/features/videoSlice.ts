import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  value: string[];
}

const initialState: VideoState = {
  value: [],
};

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    addVideo: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
