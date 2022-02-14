import youtube from '@/services/youtube';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface VideoState {
  // nowVideo: Video;
  nowVideo: any;
  videos: Video[];
  status: 'loading' | 'success' | 'failed';
  popular: any;
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
  status: 'loading',
  popular: [],
};

export const getPopular = createAsyncThunk('videos/getPopular', async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet,contentDetails',
      chart: 'mostPopular',
      maxResults: 10,
      regionCode: 'KR',
      videoCategoryId: '10', // Music
    },
  });
});

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    playVideo: (state, action: PayloadAction<Video>) => {
      state.nowVideo = action.payload;
    },
    addVideo: (state, action: PayloadAction<Video>) => {
      if (!state.videos.includes(action.payload)) {
        state.videos.push(action.payload);
      }
    },
    removeVideo: (state, action: PayloadAction<Video>) => {
      state.videos = state.videos.filter((item) => item.id !== action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPopular.pending, (state, action) => {
      state.status = 'loading';
    });

    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.status = 'success';
      state.popular = action.payload;
    });

    builder.addCase(getPopular.rejected, (state, action) => {
      state.status = 'failed';
    });
  },
});

export const { playVideo, addVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;
