import { useEffect } from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '@/app/store';
import { Card, Spinner } from '@/components/';
import { useBookmarkChecker } from '@/hooks/useBookmarkChecker';
import { getPopularList } from '@/features/popularList/popularListSlice';

const Home = () => {
  const { popularList, loading, error } = useAppSelector((state) => state.popularList);
  const dispatch = useAppDispatch();
  const markedPopularList = useBookmarkChecker(popularList);

  useEffect(() => {
    dispatch(getPopularList());
  }, [dispatch]);

  return (
    <>
      <Title>인기 동영상</Title>

      {loading === 'pending' ? (
        <Spinner />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        markedPopularList.map((video, index) => <Card video={video} key={index} />)
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
