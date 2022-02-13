import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import youtube from '@/services/youtube';
import { Card, Spinner } from '@/components/';
import { useSelector } from 'react-redux';
import { RootState } from '@/features/store';

const Home = () => {
  const videos = useSelector((state: RootState) => state.videos.videos);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet,contentDetails',
        chart: 'mostPopular',
        maxResults: 3,
        regionCode: 'KR',
        videoCategoryId: '10', // Music
      },
    });

    const checkedData = response.data.items.map((item: any) => {
      for (const video of videos) {
        if (video.id === item.id) return { ...item, bookmark: true };
      }

      return { ...item, bookmark: false };
    });

    setData(checkedData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    console.log('this', data);
  }, []);

  return (
    <>
      <Title>인기 동영상</Title>

      {loading ? <Spinner /> : data?.map((item, index) => <Card data={item} key={index} />)}
    </>
  );
};

const Title = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 1rem;
`;

export default Home;
