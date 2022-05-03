import { StyledLink } from './FooterItem.styled';

interface FooterItemProps {
  path: string;
  component: JSX.Element;
}

const FooterItem = ({ path, component }: FooterItemProps) => {
  return <StyledLink to={path}>{component}</StyledLink>;
};

export default FooterItem;
