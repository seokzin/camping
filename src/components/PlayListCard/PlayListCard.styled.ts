import styled, { css } from 'styled-components';

interface ImageProps {
  isPlaying: boolean;
}

interface PlayIconBoxProps {
  isPlaying: boolean;
}

export const Layout = styled.div`
  display: flex;
  padding: 0.3rem 0;
  cursor: pointer;
`;

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Image = styled.img<ImageProps>`
  width: 4rem;
  height: 3rem;
  object-fit: cover;
  border-radius: 0.25rem;

  ${(props) =>
    props.isPlaying &&
    css`
      filter: opacity(25%);
    `}
`;

export const PlayIconBox = styled.button<PlayIconBoxProps>`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  transform: translate(-50%, -50%);

  background-color: transparent;
  border: none;

  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }

  ${(props) =>
    !props.isPlaying &&
    css`
      visibility: hidden;
    `}
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 0.5rem;
  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-left: 0.5rem;
`;

export const Info = styled.div``;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.mainText};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.mode.subText};
`;
