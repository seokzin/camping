import { PlayListCard } from '@/components';
import { useAppSelector } from '@/app/store';

import { Title } from './PlayList.styled';

const PlayList = () => {
  const { playList } = useAppSelector((state) => state.playList);

  return (
    <>
      <Title>Playlist</Title>

      {playList.map((video, index) => (
        <PlayListCard video={video} key={index} />
      ))}
    </>
  );
};

export default PlayList;
