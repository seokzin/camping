import React from 'react';
import styled from 'styled-components';

import FooterItem from './FooterItem';

const data = [
  { icon: '🏠', path: '/' },
  { icon: '🎵', path: '/playlist' },
  { icon: '🔍', path: '/search' },
];

const Footer = () => {
  return (
    <Layout>
      {data.map(({ icon, path }) => (
        <FooterItem icon={icon} path={path} key={path} />
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;

  position: sticky;
  bottom: 0;

  width: 100%;
  height: 4rem;

  /* background-color: ${({ theme }) => theme.mode.mainColor}; */
  z-index: 100;
`;

export default Footer;
