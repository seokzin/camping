import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import youtube from '@/services/youtube';
import { Card, Spinner } from '@/components/';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/features/store';
import { getPopular, Video } from '@/features/videoSlice';

const Home = () => {
  const videos = useSelector((state: RootState) => state.videos.popularList);

  const dispatch = useAppDispatch();

  const [data, setData] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await dispatch(getPopular());

    const checkedData = await response.payload.items.map((item: Video) => {
      // for를 다른 방법으로 리팩토링
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
  }, [dispatch]);

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
