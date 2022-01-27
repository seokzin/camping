import React from 'react';

import { SearchBar } from '@/components';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';

const Search = () => {
  return (
    <>
      <SearchBar />
      <SearchIcon fill='blue' />
    </>
  );
};

export default Search;
