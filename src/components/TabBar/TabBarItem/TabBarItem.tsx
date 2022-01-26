import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ITabBarItem {
  icon: string;
  path: string;
}

const TabBarItem = ({ icon, path }: ITabBarItem) => {
  return (
    <Wrapper>
      <Link to={path}>
        <Layout>{icon}</Layout>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mode.subColor};
`;

export default TabBarItem;
