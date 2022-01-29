import React from 'react';
import styled from 'styled-components';

import FooterItem from './FooterItem';
import { HomeIcon, PlaylistIcon, SearchIcon } from '@/assets/icons';

const data = [
  { name: 'home', path: '/', component: <HomeIcon /> },
  { name: 'playlist', path: '/playlist', component: <PlaylistIcon /> },
  { name: 'search', path: '/search', component: <SearchIcon /> },
];

const Footer = () => {
  return (
    <Layout>
      {data.map(({ path, component }) => (
        <FooterItem path={path} component={component} key={path} />
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;

  position: sticky;
  bottom: 0;

  width: 100%;
  height: 3rem;

  background-color: ${({ theme }) => theme.mode.mainColor};
  border-top: 2px solid ${({ theme }) => theme.mode.subColor};
  z-index: 100;
`;

export default Footer;
