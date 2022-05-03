import styled from 'styled-components';

import { PlayListCard } from '@/components';
import { useAppSelector } from '@/app/store';

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

const Title = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 1rem;
`;

export default PlayList;
