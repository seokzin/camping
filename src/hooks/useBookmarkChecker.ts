import type { Video } from '@/features/store.types';
import { useAppSelector } from '@/app/store';

const useBookmarkChecker = (list: Video[]) => {
  const { playList } = useAppSelector((state) => state.playList);

  const markedPlayList = list.map((item: Video) => {
    if (playList.some((video) => video.id === item.id)) {
      return { ...item, bookmark: true };
    }
    return { ...item, bookmark: false };
  });

  return markedPlayList;
};

export default useBookmarkChecker;
