import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import youtube from '@/services/youtube';
import { Card } from '@/components/';
import { dataSearch } from '@/assets/data';

const items = dataSearch.items;

const Home = () => {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await youtube.get('/videos', {
      params: {
        part: 'snippet',
        // q: term,
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'KR',
        videoCategoryId: '10', // Music
      },
    });
    setData(response.data.items);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <Title>인기 동영상</Title>

      {data?.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </>
  );
};

const Title = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export default Home;
