import React from 'react';

import { useAppSelector, useAppDispatch } from '@/app/store';
import { Card, Spinner } from '@/components';
import { SearchIcon } from '@/assets/icons';
import { getSearchList, saveKeyword } from '@/features/searchList/searchListSlice';
import { useBookmarkChecker } from '@/hooks';

import { Error, Layout, SearchInput } from './Search.styled';

const Search = () => {
  const { searchList, searchKeyword, loading, error } = useAppSelector((state) => state.searchList);
  const dispatch = useAppDispatch();
  const markedSearchList = useBookmarkChecker(searchList);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveKeyword(e.target.value));
  };

  // FIXME: 어떤 event type도 e.key를 해결하지 못했음
  const onSubmit = async (e: React.MouseEvent | any) => {
    if (searchKeyword && (e.type === 'click' || e.key === 'Enter')) {
      dispatch(getSearchList(searchKeyword));
    }
  };

  return (
    <>
      <Layout>
        <SearchInput
          onChange={onChange}
          onKeyPress={onSubmit}
          value={searchKeyword}
          placeholder='검색어를 입력해주세요.'
        />
        <SearchIcon width={26} height={26} onClick={onSubmit} />
      </Layout>

      {loading === 'pending' ? (
        <Spinner />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        markedSearchList?.map((video, index) => <Card video={video} key={index} />)
      )}
    </>
  );
};

export default Search;
