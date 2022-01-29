import React from 'react';
import styled from 'styled-components';

import { SearchBar, SearchResult } from '@/components';

// TODO: isLoading, isData
const Search = () => {
  return (
    <>
      <SearchBar />
      <SearchResult />
    </>
  );
};

export default Search;
