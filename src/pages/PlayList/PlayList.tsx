import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import youtube from '@/services/youtube';
import { RootState } from '@/features/store';
import { Card, Spinner } from '@/components';
import styled from 'styled-components';

const PlayList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const videos = useSelector((state: RootState) => state.videos.videos);

  const fetchData = async () => {
    videos.map((item: string) =>
      youtube
        .get('/videos', {
          params: {
            part: 'snippet, contentDetails',
            id: item,
          },
        })
        .then((res: any) => setData(res.data.items)),
    );

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [videos]);

  return (
    <>
      <Title>Playlist</Title>

      {loading ? <Spinner /> : data?.map((item, index) => <Card data={item} key={index} />)}
    </>
  );
};

const Title = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 1rem;
`;

export default PlayList;
