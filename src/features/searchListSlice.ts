import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '@/app/rootReducer';
import { Video, YoutubeResponse } from './store.types';
import youtube from '@/services/youtube';

interface searchListState {
  searchList: Video[];
  searchKeyword: string;
  loading: 'idle' | 'pending';
  error: undefined | string;
}

const initialState: searchListState = {
  searchList: [],
  searchKeyword: '',
  loading: 'idle',
  error: undefined,
};

export const getSearch = createAsyncThunk('videos/getSearch', async (term: string) => {
  const response = await youtube.get('/search', {
    params: {
      part: 'snippet',
      q: term,
      maxResults: 10,
      regionCode: 'KR',
    },
  });
  return Promise.all(
    response.data.items.map((item: YoutubeResponse) => {
      return youtube.get('/videos', {
        params: {
          part: 'snippet, contentDetails',
          id: item.id,
        },
      });
    }),
  );
});

export const searchListSlice = createSlice({
  name: 'searchList',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSearch.pending, (state) => {
        state.loading = 'pending';
      })

      .addCase(getSearch.fulfilled, (state, { payload }: PayloadAction<Video[]>) => {
        state.loading = 'idle';
        state.searchList = payload;
      })
      .addCase(getSearch.rejected, (state, { error }) => {
        state.loading = 'idle';
        state.error = error.message;
      });
  },
});

export const selectSearchList = (state: RootState) => state.searchList;
export default searchListSlice.reducer;
