import React from 'react';
import styled from 'styled-components';

import TabBarItem from './TabBarItem';

const data = [
  { icon: '🏠', path: '/' },
  { icon: '🎵', path: '/playlist' },
  { icon: '🔍', path: '/search' },
];

const TabBar = () => {
  return (
    <Layout>
      {data.map(({ icon, path }) => (
        <TabBarItem icon={icon} path={path} key={path} />
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;

  position: absolute;
  bottom: 0;

  width: 100%;
  height: 4rem;

  /* background-color: ${({ theme }) => theme.mode.mainColor}; */
  z-index: 100;
`;

export default TabBar;
