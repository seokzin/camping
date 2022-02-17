import youtube from '@/services/youtube';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface VideoState {
  // nowVideo: Video;
  nowVideo: any;
  videos: Video[];
  popular: any;
}

// interface를 페이지 단에서 불러오는 방법 - export
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
  popular: [],
};

// 변수명을 명확히 data는 너무 포괄적
// data.data로 들어가는 구조를 개선하기
export const getPopular = createAsyncThunk('videos/getPopular', async () => {
  // 데이터를 전부 활용하지 않고 실질적 타입 정의가 필요하다. (굳이 객체 변환까지는 선택사항)
  const response = await youtube.get('/videos', {
    params: {
      part: 'snippet,contentDetails',
      chart: 'mostPopular',
      maxResults: 10,
      regionCode: 'KR',
      videoCategoryId: '10', // Music
    },
  });

  return response.data;
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
      if (!state.videos.includes(action.payload)) {
        state.videos.push(action.payload);
      }
    },
    removeVideo: (state, action: PayloadAction<Video>) => {
      state.videos = state.videos.filter((item) => item.id !== action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getPopular.fulfilled, (state, action) => {
      state.popular = action.payload;
    });
  },
});

export const { playVideo, addVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;
