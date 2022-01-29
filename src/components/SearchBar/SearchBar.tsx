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
      <SearchIcon />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  padding-bottom: 0.5rem;
  border-bottom: 1px solid gray;
`;

const SearchInput = styled.input`
  border: none;

  background-color: transparent;

  width: 100%;
`;

export default SearchBar;
