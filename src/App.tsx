import React from 'react';

import { Card, List, Player, SearchBar, Spinner } from './components';
import Router from './routes';

import { NormalizeStyle, GlobalStyle } from './styles';

const App = () => {
  return (
    <>
      <NormalizeStyle />
      <GlobalStyle />
      <h1>App</h1>

      <SearchBar />
      <Card />
      <List />
      <Player />
      <Spinner />

      <Router />
    </>
  );
};

export default App;
