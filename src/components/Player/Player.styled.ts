import styled, { css } from 'styled-components';

interface LayoutProps {
  status: 'play' | 'stop';
}

export const Layout = styled.div<LayoutProps>`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  bottom: 3rem;

  z-index: 100;

  width: 100%;
  height: 4rem;

  padding: 0 1rem;

  border-top: 1px solid ${({ theme }) => theme.mode.subColor};

  background-color: ${({ theme }) => theme.mode.mainColor};

  ${(props) =>
    !props.status &&
    css`
      visibility: hidden;
    `}

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
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  overflow: hidden;

  color: ${({ theme }) => theme.mode.mainText};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const ChannelTitle = styled.h3`
  color: ${({ theme }) => theme.mode.subText};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Image = styled.img`
  height: 3rem;

  margin-right: 0.5rem;

  border-radius: 0.25rem;
`;

export const Duration = styled.p`
  margin-top: 0.2rem;

  color: ${({ theme }) => theme.mode.subText};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const ControllerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
