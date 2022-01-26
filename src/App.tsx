import React from 'react';
import styled from 'styled-components';

import { Card, List, Player, SearchBar, Spinner } from './components';
import Router from './routes';

import { NormalizeStyle, GlobalStyle } from './styles';

const App = () => {
  return (
    <Layout>
      <NormalizeStyle />
      <GlobalStyle />
      <h1>App</h1>

      <SearchBar />
      <Card />
      <List />
      <Player />
      <Spinner />

      <Router />
    </Layout>
  );
};

const Layout = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 1rem;
  width: 375px;
  height: 812px;

  background-color: white;
  border-radius: 1rem;
`;

export default App;
