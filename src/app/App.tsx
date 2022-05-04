import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Header, Footer, Toggle, Player } from '@/components';
import { GlobalStyle } from '@/styles';
import { light, dark, fontSize, fontWeight } from '@/styles/theme';
import { useDarkMode } from '@/hooks';
import store from '@/app/store';

import { Content, Layout } from './App.styled';

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
          <GlobalStyle />

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

export default App;
