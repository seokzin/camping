import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Layout>
      <Title>Header</Title>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;

  position: sticky;
  top: 0;

  padding: 0 1rem;

  width: 100%;
  height: 3rem;

  background-color: ${({ theme }) => theme.mode.subColor};
  z-index: 100;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export default Header;
