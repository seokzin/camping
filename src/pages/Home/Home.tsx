import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Card, Spinner } from '@/components/';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/features/store.hooks';
import { getPopular, getPopularListSelector } from '@/features/videoSlice';

const Home = () => {
  const popularList = useSelector(getPopularListSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopular());
  }, []);

  return (
    <>
      <Title>인기 동영상</Title>

      {popularList?.map((item, index) => (
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

export default Home;
