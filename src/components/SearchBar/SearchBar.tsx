import React, { useState } from 'react';

import youtube from '@/services/youtube';
import { dataSearch, dataVideo, dataPlaylists } from '@/assets/data';

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
      <input type='text' onChange={onInputChange} value={term} />
    </div>
  );
};

export default SearchBar;
