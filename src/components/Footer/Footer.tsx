import { HomeIcon, PlaylistIcon, SearchIcon } from '@/assets/icons';

import FooterItem from './FooterItem';
import { Layout } from './Footer.styled';

const data = [
  { name: 'home', path: '/', component: <HomeIcon /> },
  { name: 'playlist', path: '/playlist', component: <PlaylistIcon /> },
  { name: 'search', path: '/search', component: <SearchIcon /> },
];

const Footer = () => {
  return (
    <Layout>
      {data.map(({ path, component }) => (
        <FooterItem path={path} component={component} key={path} />
      ))}
    </Layout>
  );
};

export default Footer;
