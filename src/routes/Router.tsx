import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Search, PlayList } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='search' element={<Search />} />
      <Route path='playlist' element={<PlayList />} />
    </Routes>
  );
};

export default Router;
