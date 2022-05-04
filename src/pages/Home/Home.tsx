import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '@/app/store';
import { Card, Spinner } from '@/components';
import { useBookmarkChecker } from '@/hooks';
import { getPopularList } from '@/features/popularList/popularListSlice';

import { Title, Error } from './Home.styled';

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

export default Home;
