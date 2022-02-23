import youtube from '@/services/youtube';
import { createSlice, PayloadAction, createAsyncThunk, current } from '@reduxjs/toolkit';
import { RootState } from '@/features/store';

interface VideoState {
  nowVideo: Video | undefined;
  playList: Video[];
  popularList: Video[];
  searchKeyword: string;
  searchList: Video[];
  loading: boolean;
  error: undefined | string;
}

export interface Video {
  id: string;
  title: string;
  channelTitle: string;
  thumbnail: string;
  duration: string;
  bookmark: boolean;
}

const initialState: VideoState = {
  nowVideo: undefined,
  playList: [],
  popularList: [],
  searchKeyword: '',
  searchList: [],
  loading: false,
  error: undefined,
};

const simplifyData = (rawData: any): Video => {
  return {
    id: rawData.id,
    title: rawData.snippet.title,
    channelTitle: rawData.snippet.channelTitle,
    thumbnail: rawData.snippet.thumbnails.medium.url,
    duration: rawData.contentDetails.duration,
    bookmark: false,
  };
};

const checkIsMarked = (myList: Video[], newList: Video[]): Video[] => {
  const bookmarkCheckedList = newList.map((item: Video) => {
    if (myList.some((video) => video.id === item.id)) {
      return { ...item, bookmark: true };
    }
    return { ...item, bookmark: false };
  });

  return bookmarkCheckedList;
};

export const getPopular = createAsyncThunk('videos/getPopular', async () => {
  const response = await youtube.get('/videos', {
    params: {
      part: 'snippet, contentDetails',
      chart: 'mostPopular',
      maxResults: 10,
      regionCode: 'KR',
      videoCategoryId: '10', // Music
    },
  });

  return response.data.items.map((item: any) => simplifyData(item));
});

export const getSearch = createAsyncThunk('videos/getSearch', async (term: string) => {
  const getSearchInfo = async () => {
    const response = await youtube.get('/search', {
      params: {
        part: 'snippet',
        q: term,
        maxResults: 10,
        regionCode: 'KR',
      },
    });
    return response.data.items;
  };

  const getVideosInfo = async (id: string) => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet, contentDetails',
        id,
      },
    });
    return response.data.items[0];
  };

  let searchData = await getSearchInfo();
  searchData = await Promise.all(searchData.map((item: any) => getVideosInfo(item.id.videoId)));
  return searchData.map((item: any) => simplifyData(item));
});

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    playVideo: (state, { payload }: PayloadAction<Video>) => {
      state.nowVideo = payload;
    },
    addVideo: (state, { payload }: PayloadAction<Video>) => {
      if (!current(state.playList).some((video) => video.id === payload.id)) {
        state.playList.push(payload);
      }
    },
    removeVideo: (state, { payload }: PayloadAction<Video>) => {
      state.playList = state.playList.filter((item) => item.id !== payload.id);
    },
    saveKeyword: (state, { payload }) => {
      state.searchKeyword = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPopular.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })

      .addCase(getPopular.fulfilled, (state, { payload }: PayloadAction<Video[]>) => {
        state.error = undefined;
        state.loading = false;
        state.popularList = checkIsMarked(current(state.playList), payload);
      })
      .addCase(getPopular.rejected, (state, { error }) => {
        state.error = error.message;
        state.loading = false;
      })

      .addCase(getSearch.fulfilled, (state, { payload }: PayloadAction<Video[]>) => {
        state.searchList = checkIsMarked(current(state.playList), payload);
      });
  },
});

export const { playVideo, addVideo, removeVideo, saveKeyword } = videoSlice.actions;
export const getPopularListSelector = (state: RootState) => state.videos.popularList;
export const getPlayListSelector = (state: RootState) => state.videos.playList;
export const getSearchListSelector = (state: RootState) => state.videos.searchList;
export const getTermSelector = (state: RootState) => state.videos.searchKeyword;
export const getVideoSelector = (state: RootState) => state.videos.nowVideo;
export default videoSlice.reducer;
