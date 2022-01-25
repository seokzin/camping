import React from 'react';

import { Card, List, Player, SearchBar, Spinner } from './components';

const App = () => {
  return (
    <div>
      <h1>App</h1>

      <SearchBar />
      <Card />
      <List />
      <Player />
      <Spinner />
    </div>
  );
};

export default App;
