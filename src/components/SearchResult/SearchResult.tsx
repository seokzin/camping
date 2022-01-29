import React from 'react';
import { Card } from '@/components/';
import { dataSearch } from '@/assets/data';

const items = dataSearch.items;

const SearchResult = () => {
  return (
    <>
      {items.map((data, index) => (
        <Card data={data} key={index} />
      ))}
    </>
  );
};

export default SearchResult;
