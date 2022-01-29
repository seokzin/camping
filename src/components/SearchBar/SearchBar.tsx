import React, { useState } from 'react';

import youtube from '@/services/youtube';
import { dataSearch, dataVideo, dataPlaylists } from '@/assets/data';

import { SearchIcon } from '@/assets/icons';
import styled from 'styled-components';

const SearchBar = () => {
  const [term, setTerm] = useState('');

  const onInputChange = async (e: any) => {
    setTerm(e.target.value);

    // const response = await youtube.get('/search', {
    //   params: {
    //     q: term,
    //   },
    // });

    console.log(dataSearch);
    console.log(dataVideo);
  };

  return (
    <Layout>
      <SearchInput />
      <SearchIcon width={26} height={26} />
    </Layout>
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

export default SearchBar;
