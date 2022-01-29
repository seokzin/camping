import React, { useState } from 'react';
import styled from 'styled-components';

import youtube from '@/services/youtube';
import { SearchIcon } from '@/assets/icons';

const Search = () => {
  const [term, setTerm] = useState('');

  const onChange = (e: any) => {
    setTerm(e.target.value);
  };

  const onSubmit = async (e: any) => {
    if (e.type === 'click' || e.key === 'Enter') {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      console.log(response.data);
    }
  };

  return (
    <>
      <Layout>
        <SearchInput onChange={onChange} onKeyPress={onSubmit} value={term} />
        <SearchIcon width={26} height={26} onClick={onSubmit} />
      </Layout>
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
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  :focus {
    outline: none;
  }
`;

export default Search;
