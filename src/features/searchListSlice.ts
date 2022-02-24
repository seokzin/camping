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

export const getSearchList = createAsyncThunk('videos/getSearchList', async (term: string) => {
  const searchResult = await youtube.get('/search', {
    params: {
      part: 'snippet',
      q: term,
      maxResults: 10,
      regionCode: 'KR',
    },
  });

  const PromiseArrayResult = searchResult.data.items.map(async (item: YoutubeResponse) => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet, contentDetails',
        id: item.id.videoId,
      },
    });

    const videoData: YoutubeResponse = response.data.items[0];

    // TODO: ID 관련 이슈로 추정
    return {
      id: videoData.id.videoId,
      title: videoData.snippet.title,
      channelTitle: videoData.snippet.channelTitle,
      thumbnail: videoData.snippet.thumbnails.medium.url,
      duration: videoData.contentDetails.duration,
      bookmark: false,
    };
  });

  return Promise.all(PromiseArrayResult);
  // return PromiseArrayResult;
  // return await Promise.all(
  //   response.data.items.map((item: YoutubeResponse) => {
  //     return youtube
  //       .get('/videos', {
  //         params: {
  //           part: 'snippet, contentDetails',
  //           id: item.id.videoId,
  //         },
  //       })
  //       .then((item) => {
  //         return {
  //           id: item.data.items[0].id,
  //           title: item.data.items[0].snippet.title,
  //           channelTitle: item.data.items[0].snippet.channelTitle,
  //           thumbnail: item.data.items[0].snippet.thumbnails.medium.url,
  //           duration: item.data.items[0].contentDetails.duration,
  //           bookmark: false,
  //         };
  //       });
  //   }),
  // );
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
        state.searchList = payload;
      })
      .addCase(getSearchList.rejected, (state, { error }) => {
        state.loading = 'idle';
        state.error = error.message;
      });
  },
});

export const { saveKeyword } = searchListSlice.actions;
export const selectSearchList = (state: RootState) => state.searchList;
export default searchListSlice.reducer;
