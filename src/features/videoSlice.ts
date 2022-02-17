import youtube from '@/services/youtube';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface VideoState {
  nowVideo: Video | undefined;
  playList: Video[];
  popularList: Video[];
  searchList: Video[];
}

// interface를 페이지 단에서 불러오는 방법 - export
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
  searchList: [],
};

const simplifyData = (rawData: any): any => {
  return {
    id: rawData.id,
    title: rawData.snippet.title,
    channelTitle: rawData.snippet.channelTitle,
    thumbnail: rawData.snippet.thumbnails.medium.url,
    duration: rawData.contentDetails.duration,
    bookmark: false,
  };
};

// 변수명을 명확히 data는 너무 포괄적
// data.data로 들어가는 구조를 개선하기
export const getPopular = createAsyncThunk('videos/getPopular', async () => {
  // 데이터를 전부 활용하지 않고 실질적 타입 정의가 필요하다. (굳이 객체 변환까지는 선택사항)
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

  const searchData = await getSearchInfo();
  const videosData = await Promise.all(
    searchData.map((item: any) => getVideosInfo(item.id.videoId)),
  );

  return videosData.map((item) => simplifyData(item));
  // const checkedData = videosData.map((item: any) => {
  //   for (const video of state.playList) {
  //     if (video.id === item.id) return { ...item, bookmark: true };
  //   }

  //   return { ...item, bookmark: false };
  // });
});

export const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    playVideo: (state, action: PayloadAction<Video>) => {
      state.nowVideo = action.payload;
    },
    addVideo: (state, action: PayloadAction<Video>) => {
      // TODO: 중복 로직 테스트
      if (!state.playList.includes(action.payload)) {
        state.playList.push(action.payload);
      }
    },
    removeVideo: (state, action: PayloadAction<Video>) => {
      state.playList = state.playList.filter((item) => item.id !== action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPopular.fulfilled, (state, action) => {
        state.popularList = action.payload;
      })
      .addCase(getSearch.fulfilled, (state, action) => {
        state.searchList = action.payload;
      });
  },
});

export const { playVideo, addVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;
