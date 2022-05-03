import styled, { ThemeProvider } from 'styled-components';

import { Header, Footer, Toggle, Player } from '@/components';
import { Normalize, Global } from '@/styles';
import { light, dark, fontSize, fontWeight } from '@/styles/theme';
import useDarkMode from '@/hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Home, PlayList, Search } from '@/pages';

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
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='search' element={<Search />} />
                <Route path='playlist' element={<PlayList />} />
              </Routes>
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
