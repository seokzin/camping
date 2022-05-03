import styled, { css } from 'styled-components';

interface LayoutProps {
  status: 'play' | 'stop';
}

export const Layout = styled.div<LayoutProps>`
  box-sizing: border-box;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  bottom: 3rem;

  width: 100%;
  height: 4rem;

  ${(props) =>
    !props.status &&
    css`
      visibility: hidden;
    `}

  background-color: ${({ theme }) => theme.mode.mainColor};
  border-top: 1px solid ${({ theme }) => theme.mode.subColor};
  z-index: 100;

  svg path {
    fill: ${({ theme }) => theme.mode.mainText};
  }

  // Youtube
  iframe {
    width: 2rem;
    height: 2rem;
  }
`;

export const InfoBox = styled.div`
  width: 12rem;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.mainText};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const ChannelTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.mode.subText};
`;

export const Image = styled.img`
  height: 3rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`;

export const Duration = styled.p`
  margin-top: 0.2rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.mode.subText};
`;

export const ControllerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
