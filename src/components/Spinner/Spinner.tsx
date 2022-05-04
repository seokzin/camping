import { Layout, Content, SpinRing } from './Spinner.styled';

interface SpinnerProps {
  size?: 'large' | 'small';
}

const Spinner = ({ size = 'small' }: SpinnerProps) => {
  return (
    <Layout>
      <Content>
        <SpinRing size={size} />
      </Content>
    </Layout>
  );
};

export default Spinner;
