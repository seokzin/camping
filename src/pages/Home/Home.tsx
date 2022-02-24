import { useEffect } from 'react';
import styled from 'styled-components';

import { Card, Spinner } from '@/components/';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/features/store.hooks';
import { getPopularList, selectPopularList } from '@/features/popularListSlice';

const Home = () => {
  const { popularList, loading, error } = useSelector(selectPopularList);

  console.log(popularList);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPopularList());
  }, []);

  return (
    <>
      <Title>인기 동영상</Title>

      {loading === 'pending' ? (
        <Spinner />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        popularList.map((video, index) => <Card video={video} key={index} />)
      )}
    </>
  );
};

const Title = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 1rem;
`;

const Error = styled.p``;

export default Home;
