import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
  return <Layout>Loading...</Layout>;
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35rem;
`;

export default Spinner;
