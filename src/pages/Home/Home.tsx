import { useEffect } from 'react';
import styled from 'styled-components';

import { Card, Spinner } from '@/components/';
import { useSelector } from 'react-redux';
import { useBookmarkChecker } from '@/hooks/useBookmarkChecker';
import { useAppDispatch } from '@/features/store.hooks';
import { getPopularList, selectPopularList } from '@/features/popularListSlice';

const Home = () => {
  const { popularList, loading, error } = useSelector(selectPopularList);
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
