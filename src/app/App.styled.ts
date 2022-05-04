import styled from 'styled-components';

export const Layout = styled.div`
  overflow: scroll;

  position: fixed;
  top: 50%;
  left: 50%;

  width: 375px;
  height: 812px;

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.mode.mainColor};

  transform: translate(-50%, -50%);

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Content = styled.div`
  box-sizing: border-box;

  min-height: 812px;

  padding: 1rem;
`;
