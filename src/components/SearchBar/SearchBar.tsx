import React, { useState } from 'react';

import youtube from '@/services/youtube';
import { dataSearch, dataVideo, dataPlaylists } from '@/assets/data';

import { ReactComponent as search } from '@/assets/icons/search.svg';
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
    <div>
      {/* <input type='text' onChange={onInputChange} value={term} /> */}
      <SearchInput />
      <SearchIcon />
    </div>
  );
};

const SearchInput = styled.input``;

const SearchIcon = styled(search)`
  path {
    stroke: red;
  }
`;

export default SearchBar;
