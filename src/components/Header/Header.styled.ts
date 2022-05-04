import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;

  position: sticky;
  top: 0;

  z-index: 100;

  padding: 0 1rem;

  width: 100%;
  height: 1.5rem;

  background-color: ${({ theme }) => theme.mode.subColor};
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  font-size: ${({ theme }) => theme.fontSize.xl};
`;
