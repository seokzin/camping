import styled from 'styled-components';

export const Layout = styled.div`
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

export const Content = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  min-height: calc(812px - 8.5rem);
`;
