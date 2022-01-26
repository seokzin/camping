import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { Footer, Toggle } from '@/components';
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
      <Layout>
        <Normalize />
        <Global />

        <Toggle themeMode={themeMode} toggleTheme={toggleTheme} />
        <Router />
        <Footer />
      </Layout>
    </ThemeProvider>
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

  background-color: ${({ theme }) => theme.mode.mainColor};
  border-radius: 1rem;
`;

export default App;
