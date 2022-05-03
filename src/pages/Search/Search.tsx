import React from 'react';
import styled from 'styled-components';

import { useAppSelector, useAppDispatch } from '@/app/store';
import { Card, Spinner } from '@/components/';
import { SearchIcon } from '@/assets/icons';
import { getSearchList, saveKeyword } from '@/features/searchListSlice';
import { useBookmarkChecker } from '@/hooks/useBookmarkChecker';

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

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  margin-bottom: 1rem;

  border-bottom: 1px solid gray;
`;

const Error = styled.p``;

const SearchInput = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.mode.subText};
  }
`;

export default Search;
