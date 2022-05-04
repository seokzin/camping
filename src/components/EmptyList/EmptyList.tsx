import { ArchiveIcon } from '@/assets/icons';

import { Layout, Content, IconBox, Text } from './EmptyList.styled';

interface EmptyListProps {
  msg: string;
}

const EmptyList = ({ msg }: EmptyListProps) => {
  return (
    <Layout>
      <Content>
        <IconBox>
          <ArchiveIcon viewBox={'0 0 20 20'} width={80} height={80} />
        </IconBox>
        <Text>{msg}</Text>
      </Content>
    </Layout>
  );
};

export default EmptyList;
