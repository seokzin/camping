import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Header, Footer, Toggle, Player } from '@/components';
import Router from '@/routes';
import { Normalize, Global } from '@/styles';
import { light, dark, fontSize, fontWeight } from '@/styles/theme';
import useDarkMode from '@/hooks';

const App = () => {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme =
    themeMode === 'light'
      ? { mode: light, fontSize, fontWeight }
      : { mode: dark, fontSize, fontWeight };

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <Global />

      <Layout>
        <Header />

        <Content>
          <Router />
        </Content>

        <Player />
        <Footer />
      </Layout>
      <Toggle themeMode={themeMode} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
};

const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 375px;
  height: 812px;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.mode.mainColor};
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Content = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
  height: calc(812px - 8.5rem);
`;

export default App;
