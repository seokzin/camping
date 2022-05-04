import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  margin-bottom: 1rem;

  border-bottom: 1px solid gray;
`;

export const Error = styled.p``;

export const SearchInput = styled.input`
  width: 100%;
  height: 2rem;

  border: none;

  background-color: transparent;

  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: ${({ theme }) => theme.mode.subText};
  }
`;
