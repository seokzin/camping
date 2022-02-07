import React, { useState } from 'react';
import styled from 'styled-components';

import { Card } from '@/components/';
import youtube from '@/services/youtube';
import { SearchIcon } from '@/assets/icons';

const Search = () => {
  const [term, setTerm] = useState('');
  const [data, setData] = useState<any[]>([]);

  const onChange = (e: any) => {
    setTerm(e.target.value);
  };

  // TODO : useEffect?
  const onSubmit = async (e: any) => {
    if (term && (e.type === 'click' || e.key === 'Enter')) {
      const response = await youtube.get('/search', {
        params: {
          part: 'snippet',
          q: term,
          maxResults: 10,
          regionCode: 'KR',
          // videoCategoryId: '10', // FIX ME: Not working
        },
      });
      setData(response.data.items);
      console.log(data);
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

      {data?.map((item, index) => (
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
