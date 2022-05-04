import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;

  width: 100%;
  height: 660px;
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 12px;
`;

export const Text = styled.p`
  text-align: center;
`;
