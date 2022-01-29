import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IFooterItem {
  path: string;
  component: JSX.Element;
}

const FooterItem = ({ path, component }: IFooterItem) => {
  return <StyledLink to={path}>{component}</StyledLink>;
};

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FooterItem;
