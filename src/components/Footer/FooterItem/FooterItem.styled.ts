import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  path {
    stroke: ${({ theme }) => theme.mode.subText};
  }

  &.active path {
    stroke: ${({ theme }) => theme.mode.mainText};
  }
`;
