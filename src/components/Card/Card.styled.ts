import styled from 'styled-components';

interface BookmarkButtonProps {
  onClick: () => void;
  isAdded: boolean;
}

export const Layout = styled.div`
  margin-bottom: 2rem;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
`;

export const PlayButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.mode.subColor};
  border: none;

  svg {
    fill: ${({ theme }) => theme.mode.mainText};
  }
`;

export const BookmarkButton = styled.button<BookmarkButtonProps>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.mode.subColor};
  border: none;

  svg {
    fill: ${(props) => (props.isAdded ? ({ theme }) => theme.mode.mainText : 'none')};
  }
`;

export const Duration = styled.p`
  position: absolute;
  bottom: 0.5rem;
  right: 0.2rem;
  background-color: #00000077;
  color: #ffffff;
  overflow: hidden;
  padding: 0.3rem;
  border-radius: 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Title = styled.h2`
  margin-top: 0.3rem;

  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.mode.mainText};

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ChannelTitle = styled.h3`
  margin-top: 0.2rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.mode.subText};
`;
