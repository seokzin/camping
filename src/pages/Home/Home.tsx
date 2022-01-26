import React from 'react';
import styled from 'styled-components';

import { Card } from '@/components/';
import { dataSearch } from '@/assets/data';

const items = dataSearch.items;

const Home = () => {
  return (
    <>
      <Title>인기 동영상</Title>

      {items.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </>
  );
};

const Title = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export default Home;
