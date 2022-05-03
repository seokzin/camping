import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { Header, Footer, Toggle, Player } from '@/components';
import { Normalize, Global } from '@/styles';
import { light, dark, fontSize, fontWeight } from '@/styles/theme';
import useDarkMode from '@/hooks';
import store from './store';

const Home = lazy(() => import('@/pages/Home'));
const PlayList = lazy(() => import('@/pages/PlayList'));
const Search = lazy(() => import('@/pages/Search'));

const App = () => {
  const [themeMode, toggleTheme] = useDarkMode();
  const theme =
    themeMode === 'light'
      ? { mode: light, fontSize, fontWeight }
      : { mode: dark, fontSize, fontWeight };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Normalize />
          <Global />

          <Layout>
            <Header />

            <Content>
              <Suspense fallback={<h2>로딩중..</h2>}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='search' element={<Search />} />
                  <Route path='playlist' element={<PlayList />} />
                </Routes>
              </Suspense>
            </Content>

            <Player />
            <Footer />
          </Layout>
          <Toggle themeMode={themeMode} toggleTheme={toggleTheme} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

const Layout = styled.div`
  position: fixed;
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
  min-height: calc(812px - 8.5rem);
`;

export default App;
