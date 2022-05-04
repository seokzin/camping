import { EmptyList, PlayListCard } from '@/components';
import { useAppSelector } from '@/app/store';

import { Title } from './PlayList.styled';

const PlayList = () => {
  const { playList } = useAppSelector((state) => state.playList);

  return (
    <>
      <Title>플레이리스트</Title>

      {playList.length > 0 ? (
        playList.map((video, index) => <PlayListCard video={video} key={index} />)
      ) : (
        <EmptyList msg='담긴 노래가 없어요.' />
      )}
    </>
  );
};

export default PlayList;
