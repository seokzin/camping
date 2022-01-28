import React from 'react';
import styled from 'styled-components';

const Player = () => {
  return <Layout>제목 재생 정지 일시정지</Layout>;
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  bottom: 3rem;

  width: 100%;
  height: 4rem;

  /* background-color: ${({ theme }) => theme.mode.mainColor}; */
  background-color: ${({ theme }) => theme.mode.subColor};
  z-index: 100;
`;

export default Player;
