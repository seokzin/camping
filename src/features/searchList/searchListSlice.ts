import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import youtube from '@/services/youtube';
import type { Video, Youtube } from '@/features/store.types';

interface searchListState {
  searchList: Video[];
  searchKeyword: string;
  loading: 'idle' | 'pending';
  error?: string;
}

const initialState: searchListState = {
  searchList: [],
  searchKeyword: '',
  loading: 'idle',
};

export const getSearchList = createAsyncThunk('videos/getSearchList', async (term: string) => {
  const searchResult = await youtube.get('/search', {
    params: {
      part: 'snippet',
      q: term,
      maxResults: 10,
      regionCode: 'KR',
    },
  });

  const PromiseArrayResult = searchResult.data.items.map(async (item: Youtube) => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet, contentDetails',
        id: item.id.videoId,
      },
    });

    const videoData: Youtube = response.data.items[0];

    return {
      id: videoData.id,
      title: videoData.snippet.title,
      channelTitle: videoData.snippet.channelTitle,
      thumbnail: videoData.snippet.thumbnails.medium.url,
      duration: videoData.contentDetails.duration,
      bookmark: false,
    };
  });

  return Promise.all(PromiseArrayResult);
});

export const searchListSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {
    saveKeyword: (state, { payload }) => {
      state.searchKeyword = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchList.pending, (state) => {
        state.loading = 'pending';
      })

      .addCase(getSearchList.fulfilled, (state, { payload }: PayloadAction<Video[]>) => {
        state.loading = 'idle';
        console.log('나', payload);
        state.searchList = payload;
      })
      .addCase(getSearchList.rejected, (state, { error }) => {
        state.loading = 'idle';
        state.error = error.message;
      });
  },
});

export const { saveKeyword } = searchListSlice.actions;
export default searchListSlice.reducer;
