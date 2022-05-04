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
  display: flex;
  align-items: center;

  position: relative;
`;

export const Image = styled.img<ImageProps>`
  object-fit: cover;

  width: 4rem;
  height: 3rem;

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

  border: none;

  background-color: transparent;

  transform: translate(-50%, -50%);

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
  margin-left: 0.5rem;

  border: none;

  background-color: transparent;

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
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.mode.mainText};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  color: ${({ theme }) => theme.mode.subText};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;
