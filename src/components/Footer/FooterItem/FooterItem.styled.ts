import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  path {
    stroke: ${({ theme }) => theme.mode.subText};
  }

  &.active path {
    stroke: ${({ theme }) => theme.mode.mainText};
  }
`;
