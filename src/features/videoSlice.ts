import youtube from '@/services/youtube';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface VideoState {
  // nowVideo: Video;
  nowVideo: any;
  videos: Video[];
}

interface Video {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
  bookmark: boolean;
}

const initialState: VideoState = {
  nowVideo: undefined,
  videos: [],
};

export const getVideos = createAsyncThunk('GET_VIDEOS', async () => {
  const response = await youtube.get('/videos', {
    params: {
      part: 'snippet,contentDetails',
      chart: 'mostPopular',
      maxResults: 10,
      regionCode: 'KR',
      videoCategoryId: '10', // Music
    },
  });

  return response;
});

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    playVideo: (state, action: PayloadAction<Video>) => {
      state.nowVideo = action.payload;
    },
    addVideo: (state, action: PayloadAction<Video>) => {
      state.videos.push(action.payload);
    },
    removeVideo: (state, action: PayloadAction<Video>) => {
      state.videos = state.videos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { playVideo, addVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;
