import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;

  position: sticky;
  bottom: 0;

  width: 100%;
  height: 3rem;

  background-color: ${({ theme }) => theme.mode.mainColor};
  border-top: 1px solid ${({ theme }) => theme.mode.subColor};
  z-index: 100;
`;
