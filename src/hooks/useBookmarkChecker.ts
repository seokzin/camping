import { useSelector } from 'react-redux';
import { selectPlayList } from '@/features/playListSlice';
import type { Video } from '@/features/store.types';

export const useBookmarkChecker = (list: Video[]) => {
  const { playList } = useSelector(selectPlayList);

  const test = list.map((item: Video) => {
    if (playList.some((video) => video.id === item.id)) {
      return { ...item, bookmark: true };
    }
    return { ...item, bookmark: false };
  });

  return test;
};
