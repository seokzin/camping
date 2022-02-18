import React, { useState } from 'react';
import styled from 'styled-components';

import { Card } from '@/components/';
import youtube from '@/services/youtube';
import { SearchIcon } from '@/assets/icons';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/features/store';
import {
  getSearch,
  saveKeyword,
  getSearchListSelector,
  getTermSelector,
} from '@/features/videoSlice';

const Search = () => {
  const searchList = useSelector(getSearchListSelector);
  const term = useSelector(getTermSelector);

  const dispatch = useAppDispatch();

  // TODO: loading 로직 redux로 옮기기
  // const [loading, setLoading] = useState(true);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(saveKeyword(e.target.value));
  };

  // FIXME: 어떤 event type도 e.key를 해결하지 못했음
  const onSubmit = async (e: React.MouseEvent | any) => {
    if (term && (e.type === 'click' || e.key === 'Enter')) {
      // setLoading(true);
      dispatch(getSearch(term));
      // setLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <SearchInput
          onChange={onChange}
          onKeyPress={onSubmit}
          value={term}
          placeholder='검색어를 입력해주세요.'
        />
        <SearchIcon width={26} height={26} onClick={onSubmit} />
      </Layout>

      {searchList?.map((item, index) => (
        <Card data={item} key={index} />
      ))}
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
