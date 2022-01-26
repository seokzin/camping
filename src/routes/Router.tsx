import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Search, PlayList } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='playlist' element={<PlayList />} />
      </Route>
    </Routes>
  );
};

export default Router;
