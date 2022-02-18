import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import youtube from '@/services/youtube';
import { Card, Spinner } from '@/components/';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/features/store';
import { getPopular, Video, getPlayListSelector } from '@/features/videoSlice';

const Home = () => {
  const playList = useSelector(getPlayListSelector);
  const dispatch = useAppDispatch();

  const [data, setData] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await dispatch(getPopular());
    setData(response.payload);
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
