import React from 'react';

import { Card, List, Player, SearchBar, Spinner } from './components';
import Router from './routes';

const App = () => {
  return (
    <div>
      <h1>App</h1>

      <SearchBar />
      <Card />
      <List />
      <Player />
      <Spinner />

      <Router />
    </div>
  );
};

export default App;
