import { useSelector } from 'react-redux';

import { PlayListCard } from '@/components';
import styled from 'styled-components';
import { selectPlayList } from '@/features/playListSlice';

const PlayList = () => {
  const { playList } = useSelector(selectPlayList);

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
