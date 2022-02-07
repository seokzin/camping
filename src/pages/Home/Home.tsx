import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import youtube from '@/services/youtube';
import { Card, Spinner } from '@/components/';

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet,contentDetails',
        // q: term,
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'KR',
        videoCategoryId: '10', // Music
      },
    });
    setData(response.data.items);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
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
