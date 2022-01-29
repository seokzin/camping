import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IFooterItem {
  path: string;
  component: JSX.Element;
}

const FooterItem = ({ path, component }: IFooterItem) => {
  return (
    <Layout>
      <Link to={path}>
        <Layout>{component}</Layout>
      </Link>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.mode.subColor};
`;

export default FooterItem;
