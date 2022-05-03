import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '@/app/rootReducer';
import { Video, Youtube } from '@/features/store.types';
import youtube from '@/services/youtube';

interface popularListState {
  popularList: Video[];
  loading: 'idle' | 'pending';
  error: undefined | string;
}

const initialState: popularListState = {
  popularList: [],
  loading: 'idle',
  error: undefined,
};

export const getPopularList = createAsyncThunk('videos/getPopularList', async () => {
  const response = await youtube.get('/videos', {
    params: {
      part: 'snippet, contentDetails',
      chart: 'mostPopular',
      maxResults: 10,
      regionCode: 'KR',
      videoCategoryId: '10', // Music
    },
  });

  return response.data.items.map((item: Youtube) => {
    return {
      id: item.id,
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.medium.url,
      duration: item.contentDetails.duration,
      bookmark: false,
    };
  });
});

export const popularListSlice = createSlice({
  name: 'popularList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularList.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getPopularList.fulfilled, (state, { payload }: PayloadAction<Video[]>) => {
        state.loading = 'idle';
        state.popularList = payload;
      })
      .addCase(getPopularList.rejected, (state, { error }) => {
        state.loading = 'idle';
        state.error = error.message;
      });
  },
});

export const selectPopularList = (state: RootState) => state.popularList;
export default popularListSlice.reducer;
