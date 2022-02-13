import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import youtube from '@/services/youtube';
import { RootState } from '@/features/store';
import { Card, Spinner } from '@/components';
import styled from 'styled-components';

const PlayList = () => {
  const videos = useSelector((state: RootState) => state.videos.videos);

  // TODO: isLoading 어떻게 처리?
  const [loading, setLoading] = useState(true);

  console.log('list', videos);

  return (
    <>
      <Title>Playlist</Title>

      {videos?.map((item, index) => (
        <Card data={item} key={index} />
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
