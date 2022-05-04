import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;

  position: sticky;
  bottom: 0;

  z-index: 100;

  width: 100%;
  height: 3rem;

  border-top: 1px solid ${({ theme }) => theme.mode.subColor};

  background-color: ${({ theme }) => theme.mode.mainColor};
`;
